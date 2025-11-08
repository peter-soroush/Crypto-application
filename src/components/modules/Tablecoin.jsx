import React from "react";
import TableRow from "./TableRow";
import { Blocks } from "react-loader-spinner";
import style from "./styles/Tablecoin.module.css";
function Tablecoin({ coins, isLoadeing, curSymbol, setChart, currency }) {
  return (
    <div className={style.container}>
      {isLoadeing ? (
        <p>
          <Blocks
            height="80"
            width="80"
            color="#3874ff"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </p>
      ) : (
        <table className={style.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th>Direction (1h)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                curSymbol={curSymbol}
                setChart={setChart}
                currency={currency}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Tablecoin;
