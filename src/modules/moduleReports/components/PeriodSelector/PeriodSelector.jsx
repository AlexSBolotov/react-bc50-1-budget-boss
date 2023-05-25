import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import s from 'modules/moduleReports/components/PeriodSelector/PeriodSelector.module.scss';
import date from 'date-and-time';
import { useState } from 'react';

const PeriodSelector = ({ onClick }) => {
  const [data, setData] = useState(0);
  const now = new Date();
  let nextMonth = date.addMonths(now, data);
  const handleData = val => {
    setData(prev => prev + val);
    nextMonth = date.addMonths(now, val);
    console.log(val, nextMonth);
    onClick(date.format(nextMonth, 'YYYY-MM'));
  };

  return (
    <div className={s.dataBlock}>
      <p>Current period:</p>
      <div className={s.dateTitle}>
        <button className={s.btn}>
          <MdKeyboardArrowLeft
            size="20"
            color="green"
            onClick={() => handleData(-1)}
          />
        </button>
        <span>{date.format(nextMonth, 'MMMM YYYY')}</span>

        <button className={s.btn} onClick={() => handleData(1)}>
          <MdKeyboardArrowRight size="20" color="green" />
        </button>
      </div>
    </div>
  );
};

export default PeriodSelector;
