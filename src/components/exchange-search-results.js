import ExchangeSearchResult from "./exchange-search-result";

function ExchangeSearchResults({ exchanges }) {
  return (
    <ul className="search-results">
      {exchanges?.map((exchange) => (
        <ExchangeSearchResult exchange={exchange} />
      ))}
    </ul>
  );
}

export default ExchangeSearchResults;
