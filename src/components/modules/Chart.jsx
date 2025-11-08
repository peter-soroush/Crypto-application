import React, { useState } from "react";
import style from "./styles/Chart.module.css";
import { convertData } from "../../helpers/convertData";

const Chart = ({ chart, setChart }) => {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
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
