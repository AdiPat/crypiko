import { ENDPOINTS } from "./endpoints";
import axios from "axios";

class _CgApi {
  constructor({ endpoints }) {
    this.endpoints = endpoints;
  }

  async search({ query }) {
    const url = this.endpoints.SEARCH({ query });
    const results = await axios.get(url);
    return results;
  }
}

const CgApi = new _CgApi({ endpoints: ENDPOINTS });

export default CgApi;
