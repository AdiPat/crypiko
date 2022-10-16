import { Badge, Image, Card } from "react-bootstrap";

function CoinsSearchResults({ coins }) {
  return (
    <div className="search-results-container">
      <ul className="coin-search-results">
        {coins.map((coin) => {
          const { id, name, symbol, thumb, large, market_cap_rank } = coin;
          return (
            <li className="coin-search-result" key={id}>
              <div className="mx-4">
                <Image height={50} width={50} src={large} />
              </div>
              <div className="coin-search-result-info">
                <div className="coin-search-result-info-1">
                  <h6 className="pr-4 mb-2">{name}</h6>
                </div>
                <div className="coin-search-result-info-2">
                  <p className="coin-mkt-cap-rank">
                    Symbol <Badge bg="warning">{symbol}</Badge>
                  </p>
                </div>
                <div className="coin-search-result-info-2">
                  <p className="coin-mkt-cap-rank">
                    Market Cap Rank{" "}
                    <Badge bg="primary">{market_cap_rank}</Badge>
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CoinsSearchResults;
