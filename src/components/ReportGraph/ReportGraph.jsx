import s from './ReportGraph.module.css';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
  //   YAxis,
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
      fill="#C7CCDC"
      textAnchor="middle"
      dy={-6}
    >{`${value} UAH`}</text>
  );
};
// const graphContainer = document.querySelector('.bar');
// console.log(graphContainer);
// let windowWidth = window.getComputedStyle(graphContainer).width;
// console.log(windowWidth);
export default function ReportGraph() {
  return (
    <div className={s.bar}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 50,
            left: 50,
            bottom: 5,
          }}
          // defaultShowTooltip={true}
        >
          <CartesianGrid vertical={false} stroke={'grey'} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60C470" stopOpacity={1} />
              <stop offset="100%" stopColor="#383C46" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="#C7CCDC"
            axisLine={false}
            tickLine={false}
          />
          {/* <YAxis /> */}
          {/* <Tooltip /> */}
          {/* <Legend  /> */}

          <Bar
            dataKey="uv"
            fill="url(#colorUv)"
            barSize={38}
            // label={{ position: 'top' }}
            // label={renderCustomBarLabel}
            radius={[10, 10, 0, 0]}
          >
            <LabelList
              content={renderCustomBarLabel}
              // dataKey="uv"
              position="top"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
