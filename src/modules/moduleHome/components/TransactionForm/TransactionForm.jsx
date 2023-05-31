// import Select from 'react-select';
import { useRef } from 'react';
import { format } from 'date-fns';
import s from './TransactionForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentTransactionType,
  selectExpensesCategories,
  selectIncomesCategories,
} from 'redux/transaction/transactionSelectors';
import { addToTransactionsStats } from 'redux/transaction/transactionSlice';
import {
  addTransactionExpense,
  addTransactionIncome,
} from 'redux/transaction/transactionOperations';
import {
  categoryTranslationEnToRu,
  categoryTranslationRuToEn,
} from './translateFunc';
import { nanoid } from '@reduxjs/toolkit';

const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};
const TransactionForm = ({ selectedDate }) => {
  const currentTransactionType = useSelector(selectCurrentTransactionType);
  const expensesCategories = useSelector(selectExpensesCategories);
  const incomesCategories = useSelector(selectIncomesCategories);
  const formRef = useRef(null);

  const dispatch = useDispatch();
  const handleFormSubmit = e => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;
    const description = e.target.elements.description.value;
    const category = categoryTranslationEnToRu(
      e.target.elements.categories.value
    );
    const date = formatEventStart(selectedDate);
    const monthIndex = date.slice(5, 7);
   

    const monthsArray = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];
    const month = monthsArray[Number(monthIndex) - 1];
    const statsPayload = {
      month,
      amount: Number(amount),
    };
    const payload = {
      description,
      amount: Number(amount),
      date,
      category,
    };
    dispatch(addToTransactionsStats(statsPayload));
    if (currentTransactionType === 'expenses') {
      dispatch(addTransactionExpense(payload));
    } else {
      dispatch(addTransactionIncome(payload));
    }
  formRef.current.reset();
  };
  return (
    <div className={s.mobileForm}>
      <form ref={formRef} onSubmit={e => handleFormSubmit(e)} className={s.form}>
        <input
          type="text"
          name="description"
          placeholder="Product description"
          className={s.input}
          required
        />
        <select name="categories" className={s.select} required>
          {currentTransactionType === 'expenses'
            ? expensesCategories.map(category => (
                <option
                  key={nanoid()}
                  value={categoryTranslationRuToEn(category)}
                  id="select-option"
                >
                  {categoryTranslationRuToEn(category)}
                </option>
              ))
            : incomesCategories.map(category => (
                <option
                  key={nanoid()}
                  value={categoryTranslationRuToEn(category)}
                  id="select-option"
                >
                  {categoryTranslationRuToEn(category)}
                </option>
              ))}
        </select>
        <input
          type="number"
          name="amount"
          placeholder="0.00"
          className={s.input_calc}
          required
        ></input>
        <div className={s.btn_container}>
          <button type="submit" className={s.btn_input}>
            Input
          </button>
          <button type="reset" className={s.btn_clear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
