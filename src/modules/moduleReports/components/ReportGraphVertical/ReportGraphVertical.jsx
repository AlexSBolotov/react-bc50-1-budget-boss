// import s from './ReportGraphVertical.module.css';

import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
} from 'recharts';

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

export default function ReportGraphVertical({
  notSortedData,
  dataFirstRender,
}) {
  let category = notSortedData.name_ru || dataFirstRender?.name_ru;
  console.log(dataFirstRender);
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

  return (
    <ResponsiveContainer>
      <BarChart
        data={sortedDataToRender}
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
