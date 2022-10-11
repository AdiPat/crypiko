const BASE_URL = "https://api.coingecko.com/api/v3";

const buildCgUrl = (path) => `${BASE_URL}${path}`;

const ENDPOINTS = {
  PING: () => buildCgUrl("/ping"),
  COINS_LIST: () => buildCgUrl("/coins/list"),
  COINS_MARKETS: () => buildCgUrl("/coins/markets"),
  COIN_BY_ID: ({ id }) => buildCgUrl(`/coins/${id}`),
  SEARCH: ({ query }) => buildCgUrl(`/search?query=${query}`),
};

export { ENDPOINTS };
