import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/CryptoApis";

function Homepage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(getCoinList()).then((res) =>
      res.json().then((json) => setCoins(json))
    );
  }, []);

  return (
    <div>
      <Tablecoin coins={coins} />
    </div>
  );
}

export default Homepage;
