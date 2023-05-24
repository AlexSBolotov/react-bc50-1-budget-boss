import s from './TransactionsSummary.module.css';

//объект ответв= от бека /transaction/income or /transaction/expense
const monthlyIncome = {
  incomes: [
    {
      description: 'Income description',
      amount: 100,
      date: '2020-12-31',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439011',
    },
  ],
  monthStats: {
    Январь: 10000,
    Февраль: 20000,
    Март: 30000,
    Апрель: 10000,
    Май: 20000,
    Июнь: 10000,
    Июль: 30000,
    Август: 30000,
    Сентябрь: 20000,
    Октябрь: 5000,
    Ноябрь: 7000,
    Декабрь: 10000,
  },
};

const TransactionsSummary = () => {
  // берем у объекта ответа от бека массив пар ключ-значение,
  // пока не реализована логика выбора массива затрат или расходов, для примера взят массив доходов
  const values = Object.entries(monthlyIncome.monthStats);

  // создаем новый массив с объектами с ключами-названиями месяцов, а значениями - суммами,
  // логика перевода названий месяцов пока не реализована
  const changedMonthlyIncome = values.map(el => ({
    month: el[0],
    amount: el[1],
  }));

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
        <tbody>
          {changedMonthlyIncome.map(({ month, amount }) => (
            <tr key={month}>
              <td className={s.summaryTableCell}>{month}</td>
              <td className={s.summaryTableCell}>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsSummary;
