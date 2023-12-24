import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";

interface CandlestickChartProps {}

const CandlestickChart: React.FC<CandlestickChartProps> = () => {
  const [series, setSeries] = useState([
    {
      name: "candle",
      data: [
        {
          x: new Date("2023-12-01T00:00:00"),
          y: [600, 650, 590, 630],
        },
        {
          x: new Date("2023-12-02T00:00:00"),
          y: [630, 680, 610, 670],
        },
        {
          x: new Date("2023-12-03T00:00:00"),
          y: [670, 720, 650, 710],
        },
        {
          x: new Date("2023-12-04T00:00:00"),
          y: [710, 750, 690, 720],
        },
        {
          x: new Date("2023-12-05T00:00:00"),
          y: [720, 780, 700, 770],
        },
        {
          x: new Date("2023-12-06T00:00:00"),
          y: [770, 810, 750, 800],
        },
        {
          x: new Date("2023-12-07T00:00:00"),
          y: [800, 840, 780, 830],
        },
        {
          x: new Date("2023-12-08T00:00:00"),
          y: [830, 880, 820, 860],
        },
        {
          x: new Date("2023-12-09T00:00:00"),
          y: [860, 900, 850, 880],
        },
        {
          x: new Date("2023-12-10T00:00:00"),
          y: [880, 920, 860, 900],
        },
      ],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: "candlestick",
    },
    title: {
      text: "Payment Details",
      align: "left",
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#27ae60",
          downward: "#e74c3c",
        },
      },
    },
    annotations: {
      xaxis: [
        {
          x: "Oct 06 14:00",
          borderColor: "#2c3e50",
          label: {
            borderColor: "#2c3e50",
            style: {
              fontSize: "12px",
              color: "#fff",
              background: "#2c3e50",
            },
            orientation: "horizontal",
            offsetY: 7,
            text: "Annotation Test",
          },
        },
      ],
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: (val: string) => dayjs(val).format("MMM DD HH:mm"),
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        // @ts-ignore
        options={options}
        series={series}
        type="candlestick"
        height={400}
      />
    </div>
  );
};

export default CandlestickChart;
