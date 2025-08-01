"use client";

import { Thermometer } from "lucide-react";
import { Area, AreaChart, XAxis } from "recharts";

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
} from "@/components/ui/chart";

export const description = "A simple area chart";



const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function TemperatureChart() {
  
  return (
    <Card className="flex flex-col w-[300px] p-4">
      <CardHeader className="flex items-center gap-2 p-0 pb-2">
        <Thermometer className="h-4 w-4" />
        <CardTitle className="text-sm font-medium">Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="items-center justify-center mr-4">
          <h3>98.6</h3>
          <h5>°F</h5>
        </div>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="aera2Gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C6B200" />
                <stop offset="100%" stopColor="#EFF9FF" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tick={false}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#aera2Gradient)"
              stroke="white"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
