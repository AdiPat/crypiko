import { SidebarLayout } from "../components";
import { InputGroup, Form, Alert, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { ReactComponent as EyeViewSvg } from "../assets/eye-view.svg";
import { useState } from "react";
import { CgApi } from "../api/coingecko";

const ENTER_KEYCODE = 13;

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const results = await CgApi.search({ query: searchQuery });
    setSearchResults(results);
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
              variant="dark"
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
        </div>
      </SidebarLayout>
    </>
  );
}

export default SearchPage;
