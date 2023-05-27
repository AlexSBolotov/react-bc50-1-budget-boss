// import ReportGraphHorixontal from '../ReportGraphHorizontal/ReportGraphHorizontal';
import ReportGraphHorizontal from '../ReportGraphHorizontal/ReportGraphHorizontal';
import ReportGraphVertical from '../ReportGraphVertical/ReportGraphVertical';
import s from './ReportGraph.module.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export default function ReportGraph({ data }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  console.log(data);
  const data_export = Object.values(data);
  // console.log(data_export);
  return (
    <div className={s.bar}>
      {isMobile ? (
        <ReportGraphHorizontal dataExp={data_export} />
      ) : (
        <ReportGraphVertical dataExp={data_export} />
      )}
    </div>
  );
}
