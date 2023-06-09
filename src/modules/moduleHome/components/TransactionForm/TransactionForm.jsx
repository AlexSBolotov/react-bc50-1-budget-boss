import Select from 'react-select';
import { useRef, useState } from 'react';
import { format } from 'date-fns';
import './TransactionForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentTransactionType
} from 'redux/transaction/transactionSelectors';
import { addToTransactionsStats } from 'redux/transaction/transactionSlice';
import {
  addTransactionExpense,
  addTransactionIncome,
} from 'redux/transaction/transactionOperations';
import {
  categoryTranslationEnToRu
} from './translateFunc';
import {expenses, incomes} from './categories';

const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};



const TransactionForm = ({ selectedDate }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const currentTransactionType = useSelector(selectCurrentTransactionType);
  const formRef = useRef(null);
  

  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const amount = e.target.elements.amount.value;
    const description = e.target.elements.description.value;
    const category = categoryTranslationEnToRu(
        e.target.elements.category.value.toString()
      );
    const date = formatEventStart(selectedDate);
    const monthIndex = date.slice(5, 7);
   

    const monthsArray = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];
    const month = monthsArray[Number(monthIndex) - 1];
    const statsPayload = {
      month,
      amount: Number(amount),
    };
    const payload = {
      description,
      amount: Number(amount),
      date,
      category,
    };
    dispatch(addToTransactionsStats(statsPayload));
    if (currentTransactionType === 'expenses') {
      dispatch(addTransactionExpense(payload));
    } else {
      dispatch(addTransactionIncome(payload));
    }
  formRef.current.reset();
  setSelectedOption(null);
  };
  return (
    <div className='mobileForm'>
      <form ref={formRef} onSubmit={e => handleFormSubmit(e)} className='form'>
        <input
          type="text"
          name="description"
          placeholder="Product description"
          className='input'
          required
        />
        <Select
         menuShouldBlockScroll={true}
         menuShouldScrollIntoView={false}
        className='select-container'
        classNamePrefix='select'
        required
        options={currentTransactionType === 'expenses' ? expenses : incomes}
        placeholder="Product category"
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        // styles={objectStyle}
        name="category"
       
      
      />
        <input
          type="number"
          name="amount"
          placeholder="0.00"
          className='input_calc'
          required
        ></input>
        <div className='btn_container'>
          <button type="submit" className='btn_input'>
            Input
          </button>
          <button type="reset" className='btn_clear'>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
