import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/CryptoApis";

function Homepage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };
    getData();
    // fetch(getCoinList()).then((res) =>
    //   res.json().then((json) => setCoins(json))
    // );
  }, []);

  return (
    <div>
      <Tablecoin coins={coins} />
    </div>
  );
}

export default Homepage;
