"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import React from "react";
import { PieChart, Pie, Label } from "recharts";

type PieChartCardProps = {
  chartTitle?: string;
  chartData: { status: string; visitors: number; fill: string }[];
  chartConfig: ChartConfig;
};

const PieChartCard: React.FC<PieChartCardProps> = ({
  chartTitle,
  chartData,
  chartConfig,
}) => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);
  return (
    <>
      <Card className="flex flex-col w-[300px]">
        <CardHeader className="items-center pt-1">
          <CardTitle>{chartTitle}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <ChartContainer
            config={chartConfig}
            className="-mt-10 aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="status"
                innerRadius={60}
                startAngle={270}
                endAngle={-90}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 12} // Move up
                            className="fill-muted-foreground"
                          >
                            {chartTitle}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 12} // Move down
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
              <ChartLegend
                content={<ChartLegendContent nameKey="status" />}
                className="flex flex-col items-start gap-2 mt-2"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
};


export default PieChartCard;
