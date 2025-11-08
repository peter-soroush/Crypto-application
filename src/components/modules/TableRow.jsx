import React from "react";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import style from "../modules/styles/TableRow.module.css";
function TableRow({
  coin: {
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
    price_change_percentage_1h_in_currency,
  },
  curSymbol,
  setChart,
}) {
  const showHandler = () => setChart(true);
  return (
    <tr onClick={showHandler}>
      <td>
        <div className={style.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {curSymbol}
        {current_price.toLocaleString()}
      </td>
      <td
        className={
          price_change_percentage_24h > 0 ? style.success : style.error
        }
      >
        {price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>
        {curSymbol}
        {total_volume.toLocaleString()}
      </td>
      <td>
        {price_change_percentage_1h_in_currency > 0 ? (
          <img src={chartUp} alt={name + "Direction"} />
        ) : (
          <img src={chartDown} alt={name + "Direction"} />
        )}
      </td>
    </tr>
  );
}

export default TableRow;
