import { Accordion, Badge } from "react-bootstrap";
import { MAX_SEARCH_ITEMS } from "../utils/constants";
import CoinsSearchResults from "./coins-search-results";
import ExchangeSearchResults from "./exchange-search-results";
import NFTSearchResults from "./nft-search-results";

function SearchResults({ results }) {
  let { coins, nfts, exchanges } = results ?? {};
  const shouldRenderComponent = coins && nfts && exchanges;

  // show only 50 items for demo purposes
  // TODO: add pagination to show all results
  coins = coins?.slice(0, Math.min(MAX_SEARCH_ITEMS, coins?.length));
  nfts = nfts?.slice(0, Math.min(MAX_SEARCH_ITEMS, nfts?.length));
  coins = exchanges?.slice(0, Math.min(MAX_SEARCH_ITEMS, exchanges?.length));

  return (
    shouldRenderComponent && (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Coins &nbsp;
            <Badge pill bg="success">
              {coins.length} results
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
            <CoinsSearchResults coins={coins} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            NFTs &nbsp;
            <Badge pill bg="success">
              {nfts.length} results
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
            <NFTSearchResults nfts={nfts} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Exchanges &nbsp;
            <Badge pill bg="success">
              {exchanges.length} results
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
            <ExchangeSearchResults exchanges={exchanges} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  );
}

export default SearchResults;
