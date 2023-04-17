import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";

export const Graph = (props: { data: Array<number> }) => {
  const [data, setData] = useState(props.data);

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 80,
      bottom: 30,
    },
    xAxis: {
      type: "value",
      position: "top",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [],
    },
    series: [
      {
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          formatter: "{b}",
        },
        data: data,
      },
    ],
  };

  return <ReactEcharts option={option} />;
};
