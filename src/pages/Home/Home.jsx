import HomeBar from 'modules/moduleHome/components/HomeBar/HomeBar';
import TransactionContainer from 'modules/moduleHome/components/TransactionContainer/TransactionContainer';
import TransactionForm from 'modules/moduleHome/components/TransactionForm/TransactionForm';
// import s from 'pages/Home/Home.module.scss';
import TransactionDate from 'modules/moduleHome/components/TransactionDate/TransactionDate';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getTransactionExpenseCategories,
  getTransactionIncomeCategories,
} from 'redux/reports/reportsOperations';
import {
  getTransactionIncome,
  getTransactionExpense,
} from 'redux/transaction/transactionOperations';
// import { getTransactionExpenseCategories } from 'redux/reports/reportsOperations';
import { useDispatch } from 'react-redux';
import {
  // selectExpensesCategories,
  // selectIncomesCategories,
  selectCurrentTransactionType,
} from 'redux/transaction/transactionSelectors';
const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  // const expensesCategories = useSelector(selectExpensesCategories);
  // const incomesCategories = useSelector(selectIncomesCategories);
  const currentTransactionType = useSelector(selectCurrentTransactionType);
  console.log(currentTransactionType);
  useEffect(() => {
    dispatch(getTransactionExpenseCategories());
    dispatch(getTransactionIncomeCategories());
    dispatch(getTransactionIncome());
    dispatch(getTransactionExpense());
  }, [dispatch]);
  return (
    <section>
      <HomeBar />
      <TransactionDate
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <TransactionForm selectedDate={selectedDate} />
      <TransactionContainer selectedDate={selectedDate} />
    </section>
  );
};

export default Home;
