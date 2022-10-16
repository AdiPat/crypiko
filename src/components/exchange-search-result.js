import { Image, Badge } from "react-bootstrap";

function ExchangeSearchResult({ exchange }) {
  const { id, name, market_type, large } = exchange;

  return (
    <li className="search-result" key={id}>
      <div className="mx-4">
        <Image height={50} width={50} src={large} />
      </div>
      <div className="search-result-info">
        <div className="search-result-info-1">
          <h6 className="pr-4 mb-2">{name}</h6>
        </div>
        <div className="search-result-info-2">
          <p className="coin-mkt-cap-rank">
            Market Type <Badge bg="warning">{market_type}</Badge>
          </p>
        </div>
      </div>
    </li>
  );
}

export default ExchangeSearchResult;
