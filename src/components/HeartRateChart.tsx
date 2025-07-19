"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "June", desktop: 214 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "blue",
  },
} satisfies ChartConfig;

interface HeartRateChartProps {
  chartTitle?: string;
}

const HeartRateChart: React.FC<HeartRateChartProps> = ({ chartTitle }) => {
  return (
    <Card className="flex flex-col w-[300px] p-4">

      <CardHeader className="flex items-center gap-2 p-0 pb-2">
        <TrendingUp className="h-4 w-4" />
        <CardTitle className="text-sm font-medium">{chartTitle}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="items-center justify-center mr-4">
          <h3>72</h3>
          <h5>bpm</h5>
        </div>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#009966" />
                <stop offset="100%" stopColor="#C9FFDD9C" />
              </linearGradient>
            </defs>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="url(#barGradient)" radius={10}  />{" "}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default HeartRateChart;
