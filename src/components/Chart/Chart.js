import React from "react";
import CharBar from "./ChartBar";
import './Chart.css'
const Chart = (props) => {
    const datapoinValue=props.datapoints.map(datapoint =>datapoint.value)
    const totalMaximum= Math.max(...datapoinValue);


  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <CharBar
          maxValue={totalMaximum}
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.lable}
        ></CharBar>
      ))}
    </div>
  );
};

export {Chart};
