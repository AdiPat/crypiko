import { SidebarLayout } from "../components";
import { InputGroup, Form, Alert } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { ReactComponent as EyeViewSvg } from "../assets/eye-view.svg";

function SearchPage() {
  return (
    <>
      <SidebarLayout>
        <div className="search-container">
          <InputGroup>
            <InputGroup.Text>
              <span>Search &nbsp;</span>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control aria-label="search"></Form.Control>
          </InputGroup>
          <Alert style={{ marginTop: "1rem" }} variant="primary">
            You can search for anything here — coins, exchanges, markets,
            categories and NFTs!
          </Alert>
          <div className="search-infograph">
            <EyeViewSvg style={{ height: 200, width: 200 }} />
          </div>
        </div>
      </SidebarLayout>
    </>
  );
}

export default SearchPage;
