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

  async coinsList() {
    const url = this.endpoints.COINS_LIST();
    const results = await axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => {
        console.error("Failed to get coins list. ", err);
        return [];
      });
    return results;
  }

  async coinsMarkets({ page, pageSize }) {
    const url = this.endpoints.COINS_MARKETS({ page, pageSize });
    const results = await axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => {
        console.error("Failed to get coins markets. ", err);
        return [];
      });
    return results;
  }
}

const CgApi = new _CgApi({ endpoints: ENDPOINTS });

export default CgApi;
