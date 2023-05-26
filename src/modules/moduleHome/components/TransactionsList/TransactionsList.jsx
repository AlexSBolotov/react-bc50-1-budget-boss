import { useDispatch, useSelector } from 'react-redux';
// import { selectTransactions } from 'redux/auth/authSelectors';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import { format } from 'date-fns';
import { selectCurrentTransactionType } from 'redux/transaction/transactionSelectors';
import { deleteTransactionById } from 'redux/transaction/transactionSlice';
const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};

const TransactionsList = ({ selectedDate }) => {
  // const date = useSelector(selectSelectedDate);
  const dispatch = useDispatch();
  // const normalizedDate = formatEventStart(selectedDate);
  // const transactions = useSelector(selectTransactions);
  // const filteredTransactions = transactions.filter(
  //   transaction => transaction.date === normalizedDate
  // );
  const currentTransactionType = useSelector(selectCurrentTransactionType);
  const handlerDeleteClick = id => {
    dispatch(deleteTransaction(id));
    dispatch(deleteTransactionById(id));
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
