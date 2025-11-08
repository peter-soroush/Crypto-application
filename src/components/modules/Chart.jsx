import React from "react";
import style from "./styles/Chart.module.css";
const Chart = ({ chart, setChart }) => {
  return (
    <div className={style.container}>
      <span className={style.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={style.chart}></div>
    </div>
  );
};

export default Chart;
