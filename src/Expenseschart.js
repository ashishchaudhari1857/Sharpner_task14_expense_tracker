import React from "react";
import { Chart } from "./components/Chart/Chart";

export const Expenseschart = (props) => {
  const chartdatapoints = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apl", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun ", value: 0 },
    { lable: "Jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Spt", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", alue: 0 },
  ];

  for (const expense of props.expenses) {
    if (expense.date) {
      const expenseMonth = expense.date.getMonth();
      chartdatapoints[expenseMonth].value += expense.amount;
    }
  }

  return <Chart datapoints={chartdatapoints} />;
}

