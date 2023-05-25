import HomeBar from 'modules/moduleHome/components/HomeBar/HomeBar';
import TransactionContainer from 'modules/moduleHome/components/TransactionContainer/TransactionContainer';
import TransactionForm from 'modules/moduleHome/components/TransactionForm/TransactionForm';
// import s from 'pages/Home/Home.module.scss';
import TransactionDate from 'modules/moduleHome/components/TransactionDate/TransactionDate';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getTransactionExpenseCategories,
  getTransactionIncomeCategories,
} from 'redux/reports/reportsOperations';
// import { getTransactionExpenseCategories } from 'redux/reports/reportsOperations';

import { useDispatch } from 'react-redux';
import {
  selectExpensesCategories,
  selectIncomesCategories,
} from 'redux/transaction/transactionSelectors';

const Home = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpensesCategories);
  const incomes = useSelector(selectIncomesCategories);
  console.log(expenses);
  console.log(incomes);
  useEffect(() => {
    dispatch(getTransactionExpenseCategories());
    dispatch(getTransactionIncomeCategories());
  }, [dispatch]);
  return (
    <section>
      <HomeBar />

      <TransactionDate />
      <TransactionForm />
      <TransactionContainer />
    </section>
  );
};

export default Home;
