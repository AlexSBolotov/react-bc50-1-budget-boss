import s from './ReportGraphVertical.module.css';

import { nanoid } from '@reduxjs/toolkit';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
  Cell,
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
  return (
    <text
      key={nanoid()}
      x={x + width / 2}
      y={y - 6}
      fontSize="12"
      fontFamily="Roboto"
      fill="#C7CCDC"
      textAnchor="middle"
      dy={-6}
    >{`${format(value)} UAH`}</text>
  );
};

export default function ReportGraphVertical({
  notSortedData,
  dataFirstRender,
}) {
  let category = notSortedData.name_ru || dataFirstRender?.name_ru;

  let test;
  if (category) test = dataFirstRender[category];
  const notFilteredData = test ? test : notSortedData[category];
  console.log(notFilteredData);

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
  console.log(dataToRender);

  return (
    <ResponsiveContainer>
      <BarChart
        className={s.test}
        data={sortedDataToRender}
        // barSize={38}
        margin={{
          top: 65,

          bottom: 43,
        }}
      >
        <CartesianGrid
          vertical={false}
          stroke={'#474759'}
          horizontalCoordinatesGenerator={props =>
            props.height > 314
              ? [44, 86, 128, 170, 212, 254, 296, 338, 380]
              : [100, 200]
          }
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60C470" stopOpacity={1} />
            <stop offset="100%" stopColor="#383C46" stopOpacity={1} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            id="colorUv2"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            // gradientTransform="rotate(-90)"
            fillRule="nonzero"
            key={nanoid()}
          >
            <stop offset="0%" stopColor="#373745" stopOpacity={1} />
            <stop offset="100%" stopColor="#5B5B6D" stopOpacity={1} />
          </linearGradient>
        </defs>
        <YAxis type="number" hide />
        <XAxis
          type="category"
          allowDecimals={false}
          tick={false}
          hide
          padding={{ left: 150, right: 150 }}
        />

        <Bar
          className={s.test}
          barSize={38}
          dataKey="value"
          fill="url(#colorUv)"
          legendType="none"
          // data="sortedDataToRender"
        >
          {sortedDataToRender.map(({ value, name }, index, arr) => {
            return (
              <Cell
                className={s.test}
                radius={[10, 10, 0, 0]}
                key={index}
                fill={index % 3 === 0 ? 'url(#colorUv)' : 'url(#colorUv2)'}
                // x={0}
              />
            );
          })}
          <LabelList
            content={renderCustomBarLabel}
            position="top"
            key={nanoid()}
          />
          <LabelList
            dataKey="name"
            position="bottom"
            fill="#C7CCDC"
            fontFamily="Roboto"
            dy={6}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
