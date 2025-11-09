import React, { useState } from "react";
import style from "./styles/Chart.module.css";
import { convertData } from "../../helpers/convertData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ chart, setChart, curSymbol }) => {
  const [type, setType] = useState("prices");

  const typeHandeler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div className={style.container}>
      <span className={style.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={style.chart}>
        <div className={style.name}>
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={style.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={style.types} onClick={typeHandeler}>
          <button className={type === "prices" ? style.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? style.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? style.selected : null}>
            Total Volumes
          </button>
        </div>
        <div className={style.details}>
          <div>
            <p>Prices: </p>
            <span>
              {curSymbol}
              {chart.coin.current_price.toLocaleString()}
            </span>
          </div>
          <div>
            <p>ATH: </p>
            <span>
              {curSymbol}
              {chart.coin.ath.toLocaleString()}
            </span>
          </div>
          <div>
            <p>Market Cap: </p>
            <span>
              {curSymbol}
              {chart.coin.market_cap.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={400}
        height={400}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} domain={["auto", "auto"]} width="500" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
