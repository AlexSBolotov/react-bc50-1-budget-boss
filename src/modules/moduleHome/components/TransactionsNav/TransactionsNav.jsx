import React from 'react';
import styles from './TransactionsNav.module.css';
import { useDispatch } from 'react-redux';

import { changeTransactionType } from 'redux/transaction/transactionSlice';
const TransactionsNav = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        onClick={() => dispatch(changeTransactionType('expenses'))}
        type="button"
        // to="/expenses"
        className={styles.one}
      >
        Expenses
      </button>
      <button
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
