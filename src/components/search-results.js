import { Accordion, Badge } from "react-bootstrap";
import CoinsSearchResults from "./coins-search-results";
import NFTSearchResults from "./nft-search-results";

function SearchResults({ results }) {
  const { coins, categories, nfts, exchanges } = results ?? {};
  const shouldRenderComponent = coins && categories && nfts && exchanges;

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Categories &nbsp;
            <Badge pill bg="success">
              {categories.length} results
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  );
}

export default SearchResults;
