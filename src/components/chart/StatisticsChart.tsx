"use client";
import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
import StatisticsCard from "../cards/statistics-card/StatisticsCard";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#26A4FF", "#1976D233"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "bar",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "45%",
      distributed: false,
      dataLabels: {
        position: "center",
      },
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "category",
    categories: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 150,
  },
};

const StatisticsChart = () => {
  const series = [
    {
      name: "Job Applied",
      data: [23, 45, 54, 60, 70, 50, 80],
    },
    {
      name: "Job View",
      data: [10, 20, 15, 25, 20, 30, 35],
    },
  ];
  return (
    <div className="flex">
      <div className="w-full flex-col-reverse md:flex-row gap-4">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
          width={"100%"}
        />
        <div className="flex gap-4">
          <div className="flex gap-2">
            <p className="block h-3 w-3 rounded bg-[#1976D299]"></p>
            <p className="text-xs font-medium text-black">Job View</p>
          </div>
          <div className="flex gap-2">
            <p className="block h-3 w-3 rounded bg-[#26A4FF]"></p>
            <p className="text-xs font-medium text-black">Job Applied</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-52">
        <StatisticsCard value={45} title="Job View" percentage="0.5%" />
        <StatisticsCard value={45} title="Job View" percentage="0.5%" />
      </div>
    </div>
  );
};

export default StatisticsChart;
