"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Calendar } from "lucide-react";

import React from "react";
import { PieChart, Pie, Label } from "recharts";

type PieChartCardProps = {
  chartTitle?: string;
  chartInnerTitle?: string;
  chartData: { status: string; visitors: number; fill: string }[];
  chartConfig: ChartConfig;
};

const PieChartCard: React.FC<PieChartCardProps> = ({
  chartTitle,
  chartInnerTitle,
  chartData,
  chartConfig,
}) => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);
  return (
    <>
      <Card className="flex flex-col w-[300px]">
        <CardHeader className="flex items-center gap-2 p-0 pb-2 pl-4">
          <CardTitle className="text-sm font-medium">{chartTitle}</CardTitle>
          <Calendar className=" h-4 w-4" />
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
                innerRadius={55}
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
                            {chartInnerTitle}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 12} // Move down
                            className="fill-foreground text-3xl font-semibold"
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
                content={({ payload }) => (
                  <div className="flex flex-col items-start gap-2 mt-2 ">
                    {payload?.map((entry, index) => (
                      <div
                        key={`item-${index}`}
                        className="flex items-center gap-2 font-sm"
                      >
                        <div
                          className="w-3 h-3 rounded-sm"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm font-semibold text-muted-foreground">
                          {entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
};


export default PieChartCard;
