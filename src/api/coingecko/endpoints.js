const BASE_URL = "https://api.coingecko.com/api/v3";

const buildCgUrl = (path) => `${BASE_URL}${path}`;

const ENDPOINTS = {
  PING: () => buildCgUrl("/ping"),
  COINS_LIST: () => buildCgUrl("/coins/list"),
  COINS_MARKETS: ({ perPage = 20, page = 1 }) =>
    buildCgUrl(
      `/coins/markets?vs_currency=usd&per_page=${perPage}&page=${page}`
    ),
  COIN_BY_ID: ({ id }) => buildCgUrl(`/coins/${id}`),
  SEARCH: ({ query }) => buildCgUrl(`/search?query=${query}`),
};

export { ENDPOINTS };
