import { useSelector } from 'react-redux';

import s from 'modules/moduleReports/components/ReportCategories/ReportCategories.module.scss';
import * as images from 'modules/moduleReports';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { selectAllExpenses, selectAllIncomes } from 'redux/store';
import { nanoid } from '@reduxjs/toolkit';
import { useRef, useState } from 'react';

const ReportCategories = ({ onclick, data, flag: _flag }) => {
  const [active2, setActive2] = useState(0);
  const activeRef = useRef();
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

  const [flag, setFlag] = useState(true);

  const expenses = useSelector(selectAllExpenses);
  const incomes = useSelector(selectAllIncomes);
  console.log((activeRef.id = 1));
  console.log(activeRef);
  function renderChoise(params) {
    return params.map((item, index) => (
      <li key={nanoid()} className={s.item}>
        <p>{format(item.total)}</p>
        <div
          ref={activeRef}
          className={active2 === index ? s.active : ''}
          onClick={e => {
            onclick(item, activeRef, e);
            setActive2(index);
          }}
        >
          <img
            src={
              item.name_en
                ? images[item.name_en.toLowerCase().split(',')[0]]
                : images.other
            }
            alt={item.name_en}
          />
        </div>
        <p>{item.name_en}</p>
      </li>
    ));
  }

  function handleChoise() {
    setFlag(!flag);
    onclick([]);
    _flag(flag);
    setActive2(0);
    console.log(active2);
  }

  return (
    <div className={s.categories}>
      <div className={s.titleReports}>
        <button className={s.btn}>
          <MdKeyboardArrowLeft
            size="26"
            color="green"
            onClick={() => handleChoise()}
          />
        </button>

        {flag && <h2>EXPRENSES </h2>}
        {!flag && <h2>INCOMES </h2>}
        <button className={s.btn} onClick={() => handleChoise()}>
          <MdKeyboardArrowRight size="26" color="green" />
        </button>
      </div>
      <ul className={s.items}>
        {flag ? renderChoise(expenses) : renderChoise(incomes)}
      </ul>
    </div>
  );
};

export default ReportCategories;
