const coingeckoApI = "CG-PLK9ztbvnnjYaavDRTfTvRDU";
const BASE_URL = "https://api.coingecko.com/api/v3";
const getCoinList = () => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&per_page=20&page=1&price_change_percentage=1h&x_cg_demo_api_key=${coingeckoApI}`;
};

export { getCoinList };
