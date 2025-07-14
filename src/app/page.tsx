import PieChartCard from '@/components/PieChart'
import { ChartConfig } from '@/components/ui/chart';
import React from 'react'

const Home = () => {
  const chartData = [
    { browser: "chrome", visitors: 80, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 20, fill: "var(--color-safari)" }
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "#2F0D68",
    },
    safari: {
      label: "Safari",
      color: "#cfcfcfff",
    },
  } satisfies ChartConfig;
  return (
    <>
      <div className="flex flex-row gap-4 justify-center flex-wrap">

        <PieChartCard chartData={chartData} chartConfig={chartConfig} />
        <PieChartCard chartData={chartData} chartConfig={chartConfig} />
        <PieChartCard chartData={chartData} chartConfig={chartConfig} />
      </div>
    </>
  );
}

export default Home
