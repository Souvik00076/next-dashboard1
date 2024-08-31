"use client";
import { mergeStyles } from "@/lib/helpers";
import Image from "next/image";
import { FC } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
type TBarChart = {
  // data?: {
  //   name: string;
  //   count?: number;
  //   total?: number;
  //   fill: string;
  // }[];
  style: string;
};
const BarChartCustom: FC<TBarChart> = ({ style }) => {
  return (
    <div
      className={mergeStyles(
        style,
        "bg-white flex flex-col  rounded-xl px-4 py-2",
      )}
    >
      <div className="flex items-center justify-between">
        <span>Students</span>
        <Image src="/moreDark.png" width={20} height={20} alt="more icon" />
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 5,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              radius={[10, 10, 0, 0]}
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              radius={[10, 10, 0, 0]}
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default BarChartCustom;
