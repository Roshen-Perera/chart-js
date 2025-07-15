import PieChartCard from '@/components/PieChart'
import { ChartConfig } from '@/components/ui/chart';
import React from 'react'

const Home = () => {
  const chartData1 = [
    { status: "checked", visitors: 80, fill: "#2F0D68" },
    { status: "all", visitors: 20, fill: "#cfcfcfff" },
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
    { status: "chrome", visitors: 80, fill: "var(--color-chrome)" },
    { status: "safari", visitors: 20, fill: "var(--color-safari)" }
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
      </div>
    </>
  );
}

export default Home
