// export default function TransactionsNav() {
//   return (
//     <div>
//       <button type="button" to="expenses">
//         Expenses
//       </button>
//       <button type="button" to="income">
//         Income
//       </button>
//     </div>
//   );
// }
import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './TransactionsNav.module.css';

const TransactionsNav = () => {
  return (
    <div className={styles.container}>
      <button type='button' to="/expenses" className={styles.one}>
        Expenses
      </button>
      <button type='button' to="/income" className={styles.two}>
        Income
      </button>
    </div>
  );
};

export default TransactionsNav;

