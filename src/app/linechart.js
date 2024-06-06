import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Aug 06",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Aug 07",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Aug 08",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Aug 09",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Aug 10",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Aug 11",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Aug 12",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function RenderLineChart() {
  return (
    <LineChart width={790} height={300} data={data}>
      <CartesianGrid strokeDasharray="1 6" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
