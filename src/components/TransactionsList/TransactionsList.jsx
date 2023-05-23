const TransactionsList = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sum</th>
          <th> </th>
        </tr>
        <tr>
          <td>21.11.2019</td>
          <td>My salary</td>
          <td>Salary</td>
          <td>20 000.00 UAH.</td>
          <button type="button">delete</button>
        </tr>
      </table>
    </div>
  );
};

export default TransactionsList;
