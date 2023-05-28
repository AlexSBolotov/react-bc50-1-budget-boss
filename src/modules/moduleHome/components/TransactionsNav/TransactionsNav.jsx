import React from 'react';
import styles from './TransactionsNav.module.css';
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
          backgroundColor:
            currentTransactionType === 'expenses' ? '#383847' : '#2D2D38',
          color: currentTransactionType === 'expenses' ? '#60C470' : '#F6F7FB',
        }}
        onClick={() => dispatch(changeTransactionType('expenses'))}
        type="button"
        // to="/expenses"
        className={styles.one}
      >
        Expenses
      </button>
      <button
        style={{
          backgroundColor:
            currentTransactionType === 'incomes' ? '#383847' : '#2D2D38',
          color: currentTransactionType === 'incomes' ? '#60C470' : '#F6F7FB',
        }}
        onClick={() => dispatch(changeTransactionType('incomes'))}
        type="button"
        // to="/income"
        className={styles.two}
      >
        Income
      </button>
    </div>
  );
};

export default TransactionsNav;
