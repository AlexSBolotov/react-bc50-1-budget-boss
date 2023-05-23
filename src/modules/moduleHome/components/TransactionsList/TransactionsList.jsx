const TransactionsList = () => {
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
