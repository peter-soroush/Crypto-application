import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import Pagination from "../modules/Pagination";
import { getCoinList } from "../../services/CryptoApis";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [isLoadeing, setIsLoadeing] = useState(true);

  const [page, setPage] = useState(1);
  const [currency, setcurrency] = useState("usd");
  const [curSymbol, setcurSymbol] = useState("$");
  const [chart, setChart] = useState(null);
  // const [tomanPrice, setTomanPrice] = useState(100000);

  useEffect(() => {
    setIsLoadeing(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoadeing(false);
      } catch (error) {
        console.log(error);
      }
    };

    //other Way to fetch
    // fetch(getCoinList()).then((res) =>
    //   res.json().then((json) => setCoins(json))
    // );

    getData();
  }, [page, currency]);

  return (
    <div>
      <Search
        currency={currency}
        setcurrency={setcurrency}
        setcurSymbol={setcurSymbol}
      />
      <Tablecoin
        coins={coins}
        isLoadeing={isLoadeing}
        curSymbol={curSymbol}
        setChart={setChart}
        currency={currency}
        chart={chart}
      />
      <Pagination page={page} setPage={setPage} />
      {!!chart && (
        <Chart setChart={setChart} chart={chart} curSymbol={curSymbol} />
      )}
    </div>
  );
}

export default Homepage;
