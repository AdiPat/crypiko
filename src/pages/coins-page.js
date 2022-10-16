import { useEffect, useState } from "react";
import { CgApi } from "../api/coingecko";
import { SidebarLayout } from "../components";
import { COINS_PAGE_SIZE } from "../utils/constants";
import ReactPaginate from "react-paginate";

function CoinsPage() {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    CgApi.coinsList().then((coinsList) => {
      const totalCoins = coinsList.length;
      const pageCount = Math.ceil(totalCoins / COINS_PAGE_SIZE);
      setPageCount(pageCount);
    });
  }, []);

  return (
    <SidebarLayout>
      <div className="coins-page">
        <h1>Coins</h1>
        <p>Explore different coins. </p>
        <hr />
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
          //onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          //forcePage={pageOffset}
        />
      </div>
    </SidebarLayout>
  );
}

export default CoinsPage;
