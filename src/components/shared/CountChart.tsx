"use client";
import { mergeStyles } from "@/lib/helpers";
import Image from "next/image";
import { FC } from "react";

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from "recharts";

type TCountChart = {
  // data?: {
  //   name: string;
  //   count?: number;
  //   total?: number;
  //   fill: string;
  // }[];
  style: string;
};
const data = [
  {
    name: "boys",
    count: 52,
    fill: "#C3EBFA",
  },
  {
    name: "girls",
    count: 71,
    fill: "#CFCEFF",
  },
  {
    name: "total",
    count: 123,
    fill: "white",
  },
];

const CountChart: FC<TCountChart> = ({ style }) => {
  return (
    <div
      className={mergeStyles(
        style,
        "bg-white flex flex-col  rounded-xl px-4 py-2",
      )}
    >
      <div className="flex items-center justify-between">
        <span>Students</span>
        <Image src="/more.png" width={20} height={20} alt="more icon" />
      </div>
      <div className="flex-1 relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="120%"
            barSize={10}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={40}
          height={40}
          className="absolute top-1/2 left-1/2 translate-y-[-23px] translate-x-[-20px]"
        />
      </div>
      <div className="flex justify-around items-center translate-x-7">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-purple rounded-full" />
          <h2 className=" translate-x-[-10px] text-xs text-gray-300">
            Boys(45%)
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow rounded-full" />
          <h2 className="translate-x-[-10px] text-xs text-gray-300">
            Girls(45%)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
