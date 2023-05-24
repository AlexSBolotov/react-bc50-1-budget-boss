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
// const renderCustomBarLabel = ({ x, y, width, value }) => {
//   return (
//     <text
//       x={x + width / 2}
//       y={y}
//       fontSize="12"
//       fontFamily="Roboto"
//       fill="#C7CCDC"
//       textAnchor="middle"
//       dy={-6}
//     >{`${value} UAH`}</text>
//   );
// };

export default function ReportGraphHorizontal() {
  return (
    <ResponsiveContainer>
      <BarChart
        layout="vertical"
        width={500}
        height={100}
        data={data}
        barGap={50}
        barSize={15}
        // reverseStackOrder={true}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        // defaultShowTooltip={true}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#60C470" stopOpacity={1} />
            <stop offset="100%" stopColor="#383C46" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          //   dataKey="name"
          //   fontSize="12"
          //   fontFamily="Roboto"
          //   stroke="#C7CCDC"
          axisLine={false}
          tickLine={false}
          hide
        />
        {/* <YAxis /> */}
        {/* <Tooltip /> */}
        {/* <Legend  /> */}

        <Bar
          dataKey="uv"
          fill="url(#colorUv)"
          //   barSize={38}
          //   label={{ position: 'top' }}
          // label={renderCustomBarLabel}
          radius={[0, 10, 10, 0]}
        >
          <LabelList
            // content={renderCustomBarLabel}
            dataKey="name"
            position="top"
            fill="#C7CCDC"
            fontFamily="Roboto"
          />
          <LabelList
            // content={renderCustomBarLabel}
            dataKey="uv"
            position="right"
            fill="#C7CCDC"
            fontFamily="Roboto"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
