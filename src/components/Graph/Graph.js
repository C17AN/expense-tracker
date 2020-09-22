import React from "react";
import { AreaChart } from "@toast-ui/react-chart";
import "./Graph.scss";

const Graph = () => {
  const data = {
    categories: ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28"],
    series: [
      {
        name: "수입",
        data: [5000, 3000, 5000, 7000, 6000, 4000, 5000, 7000, 6000, 4000],
      },
      {
        name: "지출",
        data: [8000, 1000, 7000, 2000, 5000, 3000, 7000, 2000, 5000, 3000],
      },
    ],
  };

  const options = {
    chart: {
      width: 700,
      height: 300,
      title: "Monthly Revenue",
      format: "5,000",
    },
    yAxis: {
      title: "금액",
    },
    xAxis: {
      title: "일",
      min: 0,
      max: 9000,
      suffix: "일",
    },
    series: {
      showLabel: true,
    },
  };

  return (
    <div className="graph">
      <AreaChart data={data} options={options} />
    </div>
  );
};

export default Graph;
