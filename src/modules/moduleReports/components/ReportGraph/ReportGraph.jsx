// import ReportGraphHorixontal from '../ReportGraphHorizontal/ReportGraphHorizontal';
import ReportGraphHorizontal from '../ReportGraphHorizontal/ReportGraphHorizontal';
import ReportGraphVertical from '../ReportGraphVertical/ReportGraphVertical';
import s from './ReportGraph.module.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export default function ReportGraph({ data }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  console.log(isMobile);
  console.log(data);

  return (
    <div className={s.bar}>
      {isMobile ? <ReportGraphHorizontal /> : <ReportGraphVertical />}
    </div>
  );
}
