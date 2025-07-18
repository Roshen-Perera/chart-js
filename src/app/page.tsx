"use client";
import ChartBarDefault from '@/components/BarChart';
import PieChartCard from '@/components/PieChart'
import PieChartCardPer from '@/components/PieChartPer';
import { ChartConfig } from '@/components/ui/chart';
import React from 'react'

const Home = () => {
  const chartData1 = [
    { status: "Checked", visitors: 80, fill: "var(--color-checked)" },
    { status: "All", visitors: 20, fill: "var(--color-all)" },
  ];
  const chartConfig1 = {
    visitors: {
      label: "All",
    },
    checked: {
      label: "Checked",
      color: "#2F0D68",
    },
    all: {
      label: "All",
      color: "#cfcfcfff",
    },
  } satisfies ChartConfig;

  

  const chartData2 = [
    {
      status: "Reserved",
      visitors: 80,
      fill: "var(--color-reserved)",
    },
    {
      status: "Not Reserved",
      visitors: 20,
      fill: "var(--color-notReserved)",
    },
  ];
  const chartConfig2 = {
    visitors: {
      label: "Visitors",
    },
    reserved: {
      label: "Chrome",
      color: "#C6B200",
    },
    notReserved: {
      label: "Safari",
      color: "#e4dfb9ff",
    },
  } satisfies ChartConfig;

  const chartData3 = [
    {
      status: "Male",
      visitors: 170,
      fill: "var(--color-male)",
    },
    {
      status: "Female",
      visitors: 80,
      fill: "var(--color-female)",
    },
  ];

  const chartConfig3 = {
    visitors: {
      label: "Monthly Patients",
    },
    male: {
      label: "Male",
      color: "#009966",
    },
    female: {
      label: "Female",
      color: "#90dbc2ff",
    },
  } satisfies ChartConfig;
  return (
    <>
      <div className="flex flex-row gap-4 justify-center flex-wrap p-4">
        <PieChartCard
          chartTitle="Appointments"
          chartInnerTitle="Today"
          chartData={chartData1}
          chartConfig={chartConfig1}
        />
        <PieChartCard
          chartTitle="Ward Staff"
          chartInnerTitle="All"
          chartData={chartData2}
          chartConfig={chartConfig2}
        />
        <PieChartCardPer
          chartTitle="Ward Staff"
          chartInnerTitle="All"
          chartData={chartData3}
          chartConfig={chartConfig3}
        />
      </div>
      <div className="flex flex-col items-center">
        <ChartBarDefault chartTitle="Heart Rate" />
      </div>
    </>
  );
}

export default Home
