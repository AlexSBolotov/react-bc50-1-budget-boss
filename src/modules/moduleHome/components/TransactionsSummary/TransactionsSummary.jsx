import s from './TransactionsSummary.module.css';
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

  console.log(incomesStats);

  let summaryData = [];

  if (currentTransactionType === 'incomes') {
    summaryData = Object.entries(incomes) ?? [];
  } else {
    summaryData = Object.entries(expenses) ?? [];
  }

  // console.log(summaryData);

  return (
    <>
      {summaryData.map(el => el !== 'N/A') && (
        <div className={s.summaryWrapper}>
          <table className={s.summaryTable}>
            <thead className={s.summaryHead}>
              <tr>
                <th colSpan="2" className={s.summaryTableHeading}>
                  Summary
                </th>
              </tr>
            </thead>
            <tbody>
              {summaryData.map(el => {
                if (el[1] === 'N/A') {
                  return false;
                } else {
                  return (
                    <tr key={`${el[0]}${el[1]}`}>
                      <td className={s.summaryTableCell}>
                        {monthTranslation(el[0])}
                      </td>
                      <td className={s.summaryTableCell}>{el[1]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TransactionsSummary;
