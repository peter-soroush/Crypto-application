import React from "react";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
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
}) {
  return (
    <tr>
      <td>
        <div>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td>{price_change_percentage_24h.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
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
