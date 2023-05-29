import { nanoid } from '@reduxjs/toolkit';
// import s from 'modules/moduleReports/components/ReportGraphHorizontal/ReportGraphHorizontal.module.css';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
  Cell,
  // Legend,
} from 'recharts';

const format = value => {
  const form = new Intl.NumberFormat('ru-RU', {
    style: 'decimal',

    minimumFractionDigits: 2,
    useGrouping: 'min2',
    unitDisplay: 'short',
  })
    .format(value)
    .replace(',', '.');
  // form.substring(0, 1) + ' ' + form.substring(1);
  return form;
};
const renderCustomBarLabel = ({ x, y, width, value }) => {
  console.log(x, y, width);
  return (
    <text
      key={nanoid()}
      x={width < 45 ? 150 : x + (width * 1) / 1.05}
      y={y / 1}
      fontSize="12"
      fontFamily="Roboto"
      fill="#C7CCDC"
      textAnchor="middle"
      // dx={0}
      dy={-5}
    >{`${format(value)} UAH`}</text>
  );
};
export default function ReportGraphHorizontal({
  notSortedData,
  dataFirstRender,
}) {
  let category = notSortedData.name_ru || dataFirstRender?.name_ru;
  let test;
  if (category) test = dataFirstRender[category];
  const notFilteredData = test ? test : notSortedData[category];

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
    <div>
      <ResponsiveContainer width="100%" height={493} key={nanoid()}>
        <BarChart
          width={100}
          height={100}
          data={sortedDataToRender}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          layout="vertical"
          key={nanoid()}
        >
          <defs>
            <linearGradient
              id="colorUv"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientTransform="rotate(-90)"
              fillRule="nonzero"
              key={nanoid()}
            >
              <stop offset="0%" stopColor="#383C46" stopOpacity={1} />
              <stop offset="100%" stopColor="#60C470" stopOpacity={1} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient
              id="colorUv2"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientTransform="rotate(-90)"
              fillRule="nonzero"
              key={nanoid()}
            >
              <stop offset="0%" stopColor="#373745" stopOpacity={1} />
              <stop offset="100%" stopColor="#5B5B6D" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" hide />

          <Bar
            fill="url(#colorUv2)"
            dataKey="value"
            barSize={15}
            key={nanoid()}
          >
            <LabelList
              dataKey="name"
              position="insideTopLeft"
              textAnchor="annhor"
              fontSize="12"
              fontFamily="Roboto"
              fill="#C7CCDC"
              dx={-5}
              key={nanoid()}
            />
            <LabelList
              content={renderCustomBarLabel}
              dataKey="value"
              key={nanoid()}
            />

            {sortedDataToRender.map(({ value, name }, index) => (
              <Cell
                radius={[0, 10, 10, 0]}
                key={index}
                dy={-20}
                fill={index % 3 === 0 ? 'url(#colorUv)' : 'url(#colorUv2)'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
