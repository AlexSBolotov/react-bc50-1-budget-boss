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
    value: 1100,
  },
  {
    name: 'Beef',
    value: 1000,
  },
  {
    name: 'Chiken',
    value: 800,
  },
  {
    name: 'Fish',
    value: 660,
  },
  {
    name: 'Panini',
    value: 350,
  },
  {
    name: 'Coffee',
    value: 420,
  },
  {
    name: 'Spaghetti',
    value: 230,
  },
  {
    name: 'Chocolate',
    value: 200,
  },
  {
    name: 'Olives',
    value: 320,
  },
  {
    name: 'Greens',
    value: 720,
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
        data={data}
        // barGap={250}
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
        <XAxis hide />

        <Bar dataKey="value" fill="url(#colorUv)" radius={[10, 10, 0, 0]}>
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
