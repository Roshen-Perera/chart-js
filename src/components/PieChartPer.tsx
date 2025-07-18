"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

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
        <CardHeader className="flex justify-between items-center pt-1">
          <CardTitle>{chartTitle}</CardTitle>
          <div
            className="flex items-center gap-2 text-sm font-medium rounded-lg pr-1 pl-1"
            style={{ backgroundColor: "#00996633" }}
          >
            <TrendingUp className="h-4 w-4" />
            <div>+ 6 %</div>
          </div>
        </CardHeader>
        <CardContent>
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
                startAngle={0}
                endAngle={-360}
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
                            y={(viewBox.cy || 0) - 12}
                            className="fill-muted-foreground"
                          >
                            {chartInnerTitle}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 12}
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
                  <div className="flex flex-col items-start gap-2 mt-2">
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

            {/*  */}
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
};


export default PieChartCard;
