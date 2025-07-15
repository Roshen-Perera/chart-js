import PieChartCard from '@/components/PieChart'
import { ChartConfig } from '@/components/ui/chart';
import React from 'react'

const Home = () => {
  const chartData1 = [
    { browser: "chrome", visitors: 80, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 20, fill: "var(--color-safari)" }
  ];
  const chartConfig1 = {
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

  const chartData2 = [
    { browser: "chrome", visitors: 80, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 20, fill: "var(--color-safari)" }
  ];
  const chartConfig2 = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "#C6B200",
    },
    safari: {
      label: "Safari",
      color: "#e4dfb9ff",
    },
  } satisfies ChartConfig;
  return (
    <>
      <div className="flex flex-row gap-4 justify-center flex-wrap">

        <PieChartCard chartData={chartData1} chartConfig={chartConfig1} />
        <PieChartCard chartData={chartData2} chartConfig={chartConfig2} />
      </div>
    </>
  );
}

export default Home
