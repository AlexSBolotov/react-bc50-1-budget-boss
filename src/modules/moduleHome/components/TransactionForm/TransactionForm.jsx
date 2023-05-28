// import Select from 'react-select';
import { format } from 'date-fns';
import s from './TransactionForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentTransactionType,
  selectExpensesCategories,
  selectIncomesCategories,
} from 'redux/transaction/transactionSelectors';
import {
  addTransactionExpense,
  addTransactionIncome,
} from 'redux/transaction/transactionOperations';
import { getAuthUser } from 'redux/auth/authOperations';
import {
  categoryTranslationEnToRu,
  categoryTranslationRuToEn,
} from './translateFunc';

const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};
const TransactionForm = ({ selectedDate }) => {
  const currentTransactionType = useSelector(selectCurrentTransactionType);
  const expensesCategories = useSelector(selectExpensesCategories);
  const incomesCategories = useSelector(selectIncomesCategories);


  const dispatch = useDispatch();
  const handleFormSubmit = e => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;
    const description = e.target.elements.description.value;
    const category = categoryTranslationEnToRu(
      e.target.elements.categories.value
    );
    const date = formatEventStart(selectedDate);
    const payload = {
      description,
      amount: Number(amount),
      date,
      category,
    };
    console.log('payload', payload);
    if (currentTransactionType === 'expenses') {
      dispatch(addTransactionExpense(payload));
      setTimeout(() => {
        dispatch(getAuthUser());
      }, 200);
    } else {
      dispatch(addTransactionIncome(payload));
      setTimeout(() => {
        dispatch(getAuthUser());
      }, 200);
    }
  };
  return (
    <div>
      <form onSubmit={e => handleFormSubmit(e)}
      className={s.form}>
        <input
          type="text"
          name="description"
          placeholder="Product description"
          className={s.input}
        />
        <select name="categories" className={s.select}>
          {currentTransactionType === 'expenses'
            ? expensesCategories.map(category => (
                <option value={categoryTranslationRuToEn(category)} id='select-option'>
                  {categoryTranslationRuToEn(category)}
                </option>
              ))
            : incomesCategories.map(category => (
                <option value={categoryTranslationRuToEn(category)} id='select-option'>
                  {categoryTranslationRuToEn(category)}
                </option>
              ))}
        </select>
        <input
          type="number"
          name="amount"
          placeholder="0.00"
          className={s.input_calc}
        />
        <div className={s.btn_container}>
        <button type="submit" className={s.btn_input}>
          Input
        </button>
        <button type="reset" className={s.btn_clear}>
          Clear
        </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
