import React from 'react';
import styles from './TransactionsNav.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTransactionType } from 'redux/transaction/transactionSelectors';
import { changeTransactionType } from 'redux/transaction/transactionSlice';
const TransactionsNav = () => {
  const dispatch = useDispatch();
  const currentTransactionType = useSelector(selectCurrentTransactionType);
  return (
    <div className={styles.container}>
      <button
        style={{
          boxShadow:
            currentTransactionType === 'expenses'
              ? '0px 0px 6px #41A350'
              : 'none',
          background:
            currentTransactionType !== 'expenses'
              ? 'linear-gradient(278.28deg, #2D2D38 -5.39%, #383847 94.01%)'
              : '#383847',
          color: currentTransactionType === 'expenses' ? '#60C470' : '#F6F7FB',
          borderColor:
            currentTransactionType === 'expenses' ? '#60C470' : 'transparent',
        }}
        onClick={() => dispatch(changeTransactionType('expenses'))}
        type="button"
        className={styles.one}
      >
        Expenses
      </button>
      <button
        style={{
          boxShadow:
            currentTransactionType === 'incomes'
              ? '0px 0px 6px #41A350'
              : 'none',
          background:
            currentTransactionType !== 'incomes'
              ? 'linear-gradient(245.22deg, #383847 14.1%, #2D2D38 89.51%)'
              : '#383847',
          color: currentTransactionType === 'incomes' ? '#60C470' : '#F6F7FB',
          borderColor:
            currentTransactionType === 'incomes' ? '#60C470' : 'transparent',
        }}
        onClick={() => dispatch(changeTransactionType('incomes'))}
        type="button"
        className={styles.two}
      >
        Income
      </button>
    </div>
  );
};

export default TransactionsNav;
