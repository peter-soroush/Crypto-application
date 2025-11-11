const coingeckoApI = "CG-PLK9ztbvnnjYaavDRTfTvRDU";
const BASE_URL = "https://api.coingecko.com/api/v3";

const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&per_page=20&page=${page}&price_change_percentage=1h&x_cg_demo_api_key=${coingeckoApI}`;

const searchCoin = (query) =>
  `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${coingeckoApI}`;
// const getTomanPrice = () => {
//   return `https://brsapi.ir/Api/Market/Gold_Currency.php?key=B99wLC8JEIexehDMyHzNChFVc6J3cXhQ`;
// };
const marketChart = (coin, currency, days) =>
  `${BASE_URL}/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}&x_cg_demo_api_key=${coingeckoApI}`;

export { getCoinList, searchCoin, marketChart };
