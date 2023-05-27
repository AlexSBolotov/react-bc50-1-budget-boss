// import s from './ReportGraph.module.css';
import React from 'react';
import { BarChart, Bar, YAxis, ResponsiveContainer, LabelList } from 'recharts';

export default function ReportGraphHorizontal({ notSortedData }) {
  const category = notSortedData.name_ru;
  const notFilteredData = notSortedData[category];
  let dataArr = [];
  notFilteredData &&
    (dataArr = Object.entries(notFilteredData).slice(
      1,
      Object.entries(notFilteredData).length
    ));
  let dataToRender = [];
  dataToRender = dataArr.map(el => ({ name: el[0], value: el[1] }));
  const sortedDataToRender = [...dataToRender].sort(
    (prevItem, nextItem) => nextItem.value - prevItem.value
  );
  return (
    <ResponsiveContainer>
      <BarChart
        layout="vertical"
        data={sortedDataToRender}
        barSize={15}
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
        <YAxis hide />

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
