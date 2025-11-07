const coingeckoApI = "CG-PLK9ztbvnnjYaavDRTfTvRDU";
const BASE_URL = "https://api.coingecko.com/api/v3";
const currency = "usd";
const page_Number = "1";
const getCoinList = () => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&per_page=20&page=${page_Number}&price_change_percentage=1h&x_cg_demo_api_key=${coingeckoApI}`;
};

export { getCoinList };
