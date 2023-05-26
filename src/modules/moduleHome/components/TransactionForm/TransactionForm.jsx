// import Select from 'react-select';
import { format } from 'date-fns';
import s from './TransactionForm.module.scss';
import { useDispatch } from 'react-redux';
import {
  // addTransactionExpense,
  addTransactionIncome,
} from 'redux/transaction/transactionOperations';

// const OPTIONS = [
//   { value: 'products', label: 'Products' },
//   { value: 'alcohol', label: 'Alcohol' },
//   { value: 'entertainment', label: 'Entertaiment' },
//   { value: 'health', label: 'Health' },
//   { value: 'transport', label: 'Transport' },
//   { value: 'housing', label: 'Housing' },
//   { value: 'hobbies', label: 'Sports, hobbies' },
//   { value: 'technique', label: 'Technique' },
//   { value: 'communal', label: 'Communal, communication' },
//   { value: 'education', label: 'Education' },
//   { value: 'other', label: 'Other' }

// ]
const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};
const TransactionForm = ({ selectedDate }) => {
  const dispatch = useDispatch();
  const handleFormSubmit = e => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;
    const description = e.target.elements.description.value;
    const category = e.target.elements.categories.value;
    const date = formatEventStart(selectedDate);
    const payload = {
      description,
      amount,
      date,
      category,
    };
    // dispatch(addTransactionExpense(payload));
    dispatch(addTransactionIncome(payload));
    // console.log(description, category, amount, date);
  };
  return (
    <div>
      <form onSubmit={e => handleFormSubmit(e)}>
        <input
          type="text"
          name="description"
          placeholder="Product description"
          className={s.input}
        />
        <select name="categories" className={s.select}>
          <option value="З/П">Salary</option>
          <option value="Доп. доход">Add. income</option>
          <option value="Продукты">Products</option>
          <option value="Алкоголь">Alcohol</option>
          <option value="Развлечения">Entertainment</option>
          <option value="Здоровье">Health</option>
          <option value="Транспорт">Transport</option>
          <option value="Всё для дома">Housing</option>
          <option value="Спорт и хобби">Sports, hobbies</option>
          <option value="Техника">Technique</option>
          <option value="Коммуналка и связь">Communal, communication</option>
          <option value="Образование">Education</option>
          <option value="Прочее">Other</option>
        </select>
        <input
          type="number"
          name="amount"
          placeholder="0.00"
          className={s.input_calc}
        />
        <button type="submit" className={s.btn_input}>
          Input
        </button>
        <button type="reset" className={s.btn_clear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
