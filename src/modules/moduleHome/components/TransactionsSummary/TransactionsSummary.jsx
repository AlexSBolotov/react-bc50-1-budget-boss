import s from './TransactionsSummary.module.scss';
import { useSelector } from 'react-redux';
import { monthTranslation } from './monthTranslation';
import {
  selectExpensesStats,
  selectIncomesStats,
  selectCurrentTransactionType,
} from 'redux/transaction/transactionSelectors';
import { useEffect, useState } from 'react';

const TransactionsSummary = () => {
  const expensesStats = useSelector(selectExpensesStats);
  const incomesStats = useSelector(selectIncomesStats);
  const currentTransactionType = useSelector(selectCurrentTransactionType);

  const [incomes, setIncomes] = useState(incomesStats);

  const [expenses, setExpenses] = useState(expensesStats);

  useEffect(() => {
    setIncomes(incomesStats);
  }, [incomesStats]);

  useEffect(() => {
    setExpenses(expensesStats);
  }, [expensesStats]);

  let summaryData = [];

  if (currentTransactionType === 'incomes') {
    summaryData =
      Object.entries(incomes)
        .slice(0, new Date().getMonth() + 1)
        .reverse() ?? [];
  } else {
    summaryData =
      Object.entries(expenses)
        .slice(0, new Date().getMonth() + 1)
        .reverse() ?? [];
  }

  return (
    <div className={s.summaryWrapper}>
      <table className={s.summaryTable}>
        <thead className={s.summaryHead}>
          <tr>
            <th colSpan="2" className={s.summaryTableHeading}>
              Summary
            </th>
          </tr>
        </thead>
        <tbody className={s.summaryBody}>
          {summaryData.map(el => {
            if (el[1] === 'N/A') {
              el[1] = 0;
            }
            return (
              <tr key={`${el[0]}${el[1]}`} className={s.summaryLine}>
                <td className={s.summaryTableCell}>
                  {monthTranslation(el[0])}
                </td>
                <td className={s.summaryTableCell}>{el[1]}</td>
              </tr>
            );
          })}
          <tr style={{ height: 38 }} className={s.summaryLine}>
            <td className={s.summaryTableCell}></td>
            <td className={s.summaryTableCell}></td>
          </tr>
          <tr style={{ height: 38 }} className={s.summaryLine}>
            <td className={s.summaryTableCell}></td>
            <td className={s.summaryTableCell}></td>
          </tr>
          <tr style={{ height: 38 }} className={s.summaryLine}>
            <td className={s.summaryTableCell}></td>
            <td className={s.summaryTableCell}></td>
          </tr>
          <tr style={{ height: 38 }} className={s.summaryLine}>
            <td className={s.summaryTableCell}></td>
            <td className={s.summaryTableCell}></td>
          </tr>
          <tr style={{ height: 38 }} className={s.summaryLine}>
            <td className={s.summaryTableCell}></td>
            <td className={s.summaryTableCell}></td>
          </tr>
          <tr style={{ height: 38 }} className={s.summaryLine}>
            <td className={s.summaryTableCell}></td>
            <td className={s.summaryTableCell}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsSummary;
