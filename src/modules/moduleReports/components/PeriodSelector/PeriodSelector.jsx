import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import s from 'modules/moduleReports/components/PeriodSelector/PeriodSelector.module.scss';
import date from 'date-and-time';
import { useState, useEffect, useCallback } from 'react';

const PeriodSelector = ({ onClick }) => {
  const data = new Date();

  const [count, setCount] = useState(0);

  const newData = date.addMonths(data, count);

  const fnData = useCallback(val => date.addMonths(newData, val), [newData]);

  const handleData = val => {
    if (val > 0 && count === 0) return null;
    setCount(prev => prev + val);

    onClick(date.format(fnData(val), 'YYYY-MM'));
  };

  useEffect(() => {
    onClick(date.format(newData, 'YYYY-MM'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const dataCheck = () => {
  //   if (data === 0) return true;
  //   return false;
  // };
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
        <span>{date.format(newData, 'MMMM YYYY')}</span>

        <button
          className={s.btn}
          // disabled={dataCheck()}
          onClick={() => handleData(1)}
        >
          <MdKeyboardArrowRight size="20" color="green" />
        </button>
      </div>
    </div>
  );
};

export default PeriodSelector;
