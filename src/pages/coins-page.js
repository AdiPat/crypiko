import { useEffect, useState } from "react";
import { CgApi } from "../api/coingecko";
import { CoinsList, SidebarLayout } from "../components";
import { COINS_PAGE_SIZE } from "../utils/constants";
import ReactPaginate from "react-paginate";

function CoinsPage() {
  const [pageCount, setPageCount] = useState(0);
  const [pageOffset, setPageOffset] = useState(1);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    CgApi.coinsList().then((coinsList) => {
      const totalCoins = coinsList.length;
      const pageCount = Math.ceil(totalCoins / COINS_PAGE_SIZE);
      setPageCount(pageCount);
    });
  }, []);

  useEffect(() => {
    CgApi.coinsMarkets({ page: pageOffset, pageSize: COINS_PAGE_SIZE }).then(
      (coins) => {
        console.log({ pageOffset, coins });
        setCoins(coins);
      }
    );
  }, [pageOffset]);

  const handlePageChange = (event) => {
    setPageOffset(event.selected);
  };

  return (
    <SidebarLayout>
      <div className="coins-page">
        <h1>Coins</h1>
        <p>Explore different coins. </p>
        <hr />
        <CoinsList coins={coins} isLoading={false} />
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={pageOffset}
        />
      </div>
    </SidebarLayout>
  );
}

export default CoinsPage;
