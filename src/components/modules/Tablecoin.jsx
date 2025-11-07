import React from "react";
import TableRow from "./TableRow";
import { Blocks } from "react-loader-spinner";
function Tablecoin({ coins, isLoadeing }) {
  return (
    <div>
      {isLoadeing ? (
        <p>
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </p>
      ) : (
        <table>
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
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Tablecoin;
