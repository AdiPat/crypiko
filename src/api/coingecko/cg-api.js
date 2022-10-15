import { ENDPOINTS } from "./endpoints";
import axios from "axios";

class _CgApi {
  constructor({ endpoints }) {
    this.endpoints = endpoints;
  }

  async search({ query }) {
    const url = this.endpoints.SEARCH({ query });
    const results = await axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => {
        console.error("Failed to get search results", err);
        return [];
      });
    return results;
  }
}

const CgApi = new _CgApi({ endpoints: ENDPOINTS });

export default CgApi;
