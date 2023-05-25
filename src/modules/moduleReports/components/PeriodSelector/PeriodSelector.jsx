import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import s from 'modules/moduleReports/components/PeriodSelector/PeriodSelector.module.scss';
import date from 'date-and-time';
import { useState, useCallback } from 'react';

// const test = Date.now();
// console.log(test);
// console.log(date.parse('2015/01/02 23:14:05', 'YYYY/MM/DD'));
// console.log(test);

const PeriodSelector = ({ onClick }) => {
  const data = new Date();

  // const [data, setData] = useState(new Date());
  const [count, setCount] = useState(0);

  const newData = date.addMonths(data, count);

  const fnData = useCallback(val => date.addMonths(newData, val), [newData]);

  const handleData = val => {
    setCount(prev => prev + val);

    onClick(date.format(fnData(val), 'YYYY-MM'));
  };

  // useEffect(() => {
  //   onClick(date.format(now, 'YYYY-MM'));
  // }, []);

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

        <button className={s.btn} onClick={() => handleData(1)}>
          <MdKeyboardArrowRight size="20" color="green" />
        </button>
      </div>
    </div>
  );
};

export default PeriodSelector;
