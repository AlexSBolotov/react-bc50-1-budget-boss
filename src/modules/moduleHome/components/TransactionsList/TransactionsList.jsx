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

const TransactionsList = ({ selectedDate }) => {
  const currentTransactionType = useSelector(selectCurrentTransactionType);
  const incomes = useSelector(selectIncomes);
  const expenses = useSelector(selectExpenses);

  const dispatch = useDispatch();
  const normalizedDate = formatEventStart(selectedDate);

  const filteredTransactions =
    currentTransactionType === 'incomes'
      ? incomes.filter(transaction => transaction.date === normalizedDate)
      : expenses.filter(transaction => transaction.date === normalizedDate);
  console.log(filteredTransactions);

  const handlerDeleteClick = id => {
    dispatch(deleteTransaction(id));
    dispatch(deleteTransactionById(id));
    setTimeout(() => {
      dispatch(getAuthUser());
    }, 200);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Sum</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>21.11.2019</td>
            <td>My salary</td>
            <td>Salary</td>
            <td>20 000.00 UAH.</td>
            <td>
              <button
                type="button"
                onClick={() => handlerDeleteClick('64707566eb03bb3d9868c89d')}
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
