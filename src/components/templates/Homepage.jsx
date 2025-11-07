import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import Pagination from "../modules/Pagination";
import { getCoinList } from "../../services/CryptoApis";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [isLoadeing, setIsLoadeing] = useState(true);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoadeing(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoadeing(false);
    };
    getData();

    //other Way to fetch
    // fetch(getCoinList()).then((res) =>
    //   res.json().then((json) => setCoins(json))
    // );
  }, [page]);

  return (
    <div>
      <Tablecoin coins={coins} isLoadeing={isLoadeing} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Homepage;
