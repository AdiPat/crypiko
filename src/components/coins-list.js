import { Spinner } from "react-bootstrap";
import CoinsListCard from "./coins-list-card";

function CoinsList({ coins, isLoading }) {
  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary" />}

      <ul className="coins-list">
        {coins &&
          coins?.length > 0 &&
          coins.map((coin) => <CoinsListCard coin={coin} />)}
      </ul>
    </>
  );
}

export default CoinsList;
