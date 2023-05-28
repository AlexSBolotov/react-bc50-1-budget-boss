// import ReportGraphHorixontal from '../ReportGraphHorizontal/ReportGraphHorizontal';
import { useSelector } from 'react-redux';
import ReportGraphHorizontal from '../ReportGraphHorizontal/ReportGraphHorizontal';
import ReportGraphVertical from '../ReportGraphVertical/ReportGraphVertical';
import s from './ReportGraph.module.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { selectAllExpenses, selectAllIncomes } from 'redux/store';
import { MdLocalHospital } from 'react-icons/md';

export default function ReportGraph({ data, flag }) {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  console.log(flag);
  const forRender = useSelector(flag ? selectAllExpenses : selectAllIncomes);
  console.log(forRender[0]);
  return (
    <div className={s.graph}>
      {isMobile ? (
        <ReportGraphHorizontal
          notSortedData={data}
          dataFirstRender={forRender}
        />
      ) : (
        <ReportGraphVertical
          notSortedData={data}
          dataFirstRender={forRender[0]}
        />
      )}
    </div>
  );
}
