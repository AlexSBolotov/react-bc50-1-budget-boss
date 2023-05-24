// import s from './ReportGraph.module.css';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
  // YAxis
  CartesianGrid,
  //   Tooltip,
  //   Legend,
} from 'recharts';

const data = [
  {
    name: 'Pork',
    uv: 1100,
  },
  {
    name: 'Beef',
    uv: 1000,
  },
  {
    name: 'Chiken',
    uv: 800,
  },
  {
    name: 'Fish',
    uv: 660,
  },
  {
    name: 'Panini',
    uv: 350,
  },
  {
    name: 'Coffee',
    uv: 420,
  },
  {
    name: 'Spaghetti',
    uv: 230,
  },
  {
    name: 'Chocolate',
    uv: 200,
  },
  {
    name: 'Olives',
    uv: 320,
  },
  {
    name: 'Greens',
    uv: 720,
  },
];
const renderCustomBarLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fontSize="12"
      fontFamily="Roboto"
      fill="#C7CCDC"
      textAnchor="middle"
      dy={-6}
    >{`${value} UAH`}</text>
  );
};

export default function ReportGraphVertical() {
  return (
    <ResponsiveContainer>
      <BarChart
        // layout="vertical"
        width={500}
        height={300}
        data={data}
        barGap={25}
        barSize={38}
        margin={{
          top: 50,
          right: 0,
          left: 0,
          bottom: 25,
        }}
      >
        <CartesianGrid vertical={false} stroke={'grey'} />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60C470" stopOpacity={1} />
            <stop offset="100%" stopColor="#383C46" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis axisLine={false} tickLine={false} hide />

        <Bar dataKey="uv" fill="url(#colorUv)" radius={[10, 10, 0, 0]}>
          <LabelList content={renderCustomBarLabel} position="top" />
          <LabelList
            dataKey="name"
            position="bottom"
            fill="#C7CCDC"
            fontFamily="Roboto"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
