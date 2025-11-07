import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/CryptoApis";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [isLoadeing, setIsLoadeing] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoadeing(false);
    };
    getData();

    //other Way to fetch
    // fetch(getCoinList()).then((res) =>
    //   res.json().then((json) => setCoins(json))
    // );
  }, []);

  return (
    <div>
      <Tablecoin coins={coins} isLoadeing={isLoadeing} />
    </div>
  );
}

export default Homepage;
