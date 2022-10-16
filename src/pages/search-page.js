import { SearchResults, SidebarLayout } from "../components";
import { InputGroup, Form, Alert, Button, Spinner } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { ReactComponent as EyeViewSvg } from "../assets/eye-view.svg";
import { useState } from "react";
import { CgApi } from "../api/coingecko";
import { ENTER_KEYCODE } from "../utils/constants";

function SearchPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    setIsLoading(true);
    const results = await CgApi.search({ query: searchQuery });
    setSearchResults(results);
    setIsLoading(false);
  };

  const handleOnSubmit = (event) => {
    handleSearch();
  };

  const handleKeyPress = (target) => {
    if (target.charCode === ENTER_KEYCODE) {
      handleSearch();
    }
  };

  const handleChange = (event) => {
    const searchQueryEntered = event.target.value;
    setSearchQuery(searchQueryEntered);
  };

  console.log({ searchQuery, searchResults });

  return (
    <>
      <SidebarLayout>
        <div className="search-container">
          <InputGroup>
            <Form.Control
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              aria-label="search"
            ></Form.Control>
            <Button
              onClick={handleOnSubmit}
              variant="primary"
              size="lg"
              type="submit"
            >
              SEARCH &nbsp;
              <FaSearch />
            </Button>
          </InputGroup>
          <Alert style={{ marginTop: "1rem" }} variant="primary">
            You can search for anything here — coins, exchanges, and NFTs!
          </Alert>
          {(!searchResults || searchResults?.length === 0) && (
            <div className="search-infograph">
              <EyeViewSvg style={{ height: 200, width: 200 }} />
            </div>
          )}
          {isLoading ? (
            <div className="search-results-spinner">
              <Spinner animation="border" variant="primary" />{" "}
            </div>
          ) : null}
          <SearchResults results={searchResults} />
        </div>
      </SidebarLayout>
    </>
  );
}

export default SearchPage;
