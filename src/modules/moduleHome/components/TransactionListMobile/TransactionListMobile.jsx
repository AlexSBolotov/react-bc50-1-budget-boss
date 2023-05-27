import { useMediaQuery } from 'react-responsive';
import s from './TransactionListMobile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import {
  selectCurrentTransactionType,
  selectExpenses,
  selectIncomes,
} from 'redux/transaction/transactionSelectors';
import { format } from 'date-fns';
import { deleteTransactionById } from 'redux/transaction/transactionSlice';
import { getAuthUser } from 'redux/auth/authOperations';

const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};

const TransactionsListMobile = ({ selectedDate }) => {
  //   console.log(selectedDate);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const currentTransactionType = useSelector(selectCurrentTransactionType);
  const incomes = useSelector(selectIncomes);
  const expenses = useSelector(selectExpenses);

  const dispatch = useDispatch();
  const normalizedDate = formatEventStart(selectedDate);

  const filteredTransactions =
    currentTransactionType === 'incomes'
      ? incomes.filter(transaction => transaction.date === normalizedDate)
      : expenses.filter(transaction => transaction.date === normalizedDate);
  // console.log(isMobile);

  const handlerDeleteClick = id => {
    dispatch(deleteTransaction(id));
    dispatch(deleteTransactionById(id));
    setTimeout(() => {
      dispatch(getAuthUser());
    }, 200);
  };
  // console.log(currentTransactionType);
  // console.log(filteredTransactions);

  return (
    <div className={s.mobileContainer}>
      {isMobile && (
        <ul className={s.mobileList}>
          {filteredTransactions.map(el => (
            <li className={s.mobileItem} key={el._id}>
              <div className={s.categoryContainer}>
                <p className={s.categoryDescription}>{el.description}</p>
                <div className={s.categoryWrapper}>
                  <span className={s.transactionDate}>{el.date}</span>
                  <span>{el.category}</span>
                </div>
              </div>
              <div className={s.ammountWrapper}>
                <p className={s.transactionAmount}>
                  {el.amount} {'UAH'}
                </p>
                <button onClick={() => handlerDeleteClick(el._id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionsListMobile;
