import CoinsSearchResult from "./coins-search-result";

function CoinsSearchResults({ coins }) {
  return (
    <div className="search-results-container">
      <ul className="search-results">
        {coins.map((coin) => (
          <CoinsSearchResult coin={coin} />
        ))}
      </ul>
    </div>
  );
}

export default CoinsSearchResults;
