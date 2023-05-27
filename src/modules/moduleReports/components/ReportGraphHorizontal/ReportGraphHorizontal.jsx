// import s from './ReportGraph.module.css';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
  // YAxis
  // CartesianGrid,
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

export default function ReportGraphHorizontal({ dataExp }) {
  console.log(dataExp);
  console.log('H');
  return (
    <ResponsiveContainer>
      <BarChart
        layout="vertical"
        data={data}
        // barGap={36}
        barSize={15}
        // reverseStackOrder={true}
        // style={{ stroke: '#fff', strokeWidth: 20 }}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#60C470" stopOpacity={1} />
            <stop offset="100%" stopColor="#383C46" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis hide />

        <Bar dataKey="value" fill="url(#colorUv)" radius={[0, 10, 10, 0]}>
          <LabelList
            // content={renderCustomBarLabel}
            dataKey="name"
            position="top"
            fill="#C7CCDC"
            fontFamily="Roboto"
          />
          <LabelList
            // content={renderCustomBarLabel}
            dataKey="value"
            position="right"
            fill="#C7CCDC"
            fontFamily="Roboto"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
