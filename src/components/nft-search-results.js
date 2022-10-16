import NFTSearchResult from "./nft-search-result";

function NFTSearchResults({ nfts }) {
  return (
    <ul className="coin-search-results">
      {nfts?.map((nft) => (
        <NFTSearchResult nft={nft} />
      ))}
    </ul>
  );
}

export default NFTSearchResults;
