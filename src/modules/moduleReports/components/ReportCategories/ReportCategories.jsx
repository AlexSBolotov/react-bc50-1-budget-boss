import { useSelector } from 'react-redux';

import s from 'modules/moduleReports/components/ReportCategories/ReportCategories.module.scss';
import * as images from 'modules/moduleReports';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { selectAllExpenses, selectAllIncomes } from 'redux/store';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useRef, useState, useLayoutEffect, createRef } from 'react';

const ReportCategories = ({ onclick, data }) => {
  const format = value => {
    const form = new Intl.NumberFormat('ru-RU', {
      style: 'decimal',
      // currency: 'UAH',
      // currencyDisplay: 'name',
      // signDisplay: 'exceptZero',
      minimumFractionDigits: 2,
      useGrouping: 'min2',
      unitDisplay: 'short',
    })
      .format(value)
      .replace(',', '.');
    // form.substring(0, 1) + ' ' + form.substring(1);
    return form;
  };
  const active = useRef();

  const [flag, setFlag] = useState(true);
  useLayoutEffect(() => {
    return () => {};
  }, []);

  const active3 = createRef(() => 1);
  console.log(active3);
  const expenses = useSelector(selectAllExpenses);
  useEffect(() => {
    const active2 = document.querySelector('.item');
    console.log(active2);
    setTimeout(() => {
      console.log(active);
    }, 0);
  }, []);
  const incomes = useSelector(selectAllIncomes);
  function renderChoise(params) {
    return params.map(item => (
      <li key={nanoid()} className={s.item} onClick={() => onclick(item)}>
        <p>{format(item.total)}</p>
        <div>
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
