// import ReportGraphHorixontal from '../ReportGraphHorizontal/ReportGraphHorizontal';
import { useSelector } from 'react-redux';
import ReportGraphHorizontal from '../ReportGraphHorizontal/ReportGraphHorizontal';
import ReportGraphVertical from '../ReportGraphVertical/ReportGraphVertical';
import s from './ReportGraph.module.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { selectAllExpenses, selectAllIncomes } from 'redux/store';

export default function ReportGraph({ data, flag }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const forRender = useSelector(flag ? selectAllExpenses : selectAllIncomes);

  return (
    <div className={s.graph}>
      {isMobile ? (
        <ReportGraphHorizontal
          notSortedData={data}
          dataFirstRender={forRender[0]}
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
