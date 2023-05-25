import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/auth/authSelectors';
import { format } from 'date-fns';

const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};

const TransactionsList = ({ selectedDate }) => {
  // const date = useSelector(selectSelectedDate);

  const normalizedDate = formatEventStart(selectedDate);
  console.log(normalizedDate);
  const transactions = useSelector(selectTransactions);
  const filteredTransactions = transactions.filter(
    transaction => transaction.date === normalizedDate
  );
  console.log(filteredTransactions);
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
              <button type="button">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
