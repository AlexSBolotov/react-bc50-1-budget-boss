// import Select from 'react-select';

import s from './TransactionForm.module.scss';
 
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

const TransactionForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Product description" className={s.input}/>
        {/* <Select 
        placeholder='Product category'
        className="react-select"
        classNamePrefix='react-select'
        options={OPTIONS} 
        
        /> */}
        <select name="categories" className={s.select}>
        <option value="default">
          Product category
        </option>
          <option value="products">Products</option>
          <option value="alcohol">Alcohol</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="transport">Transport</option>
          <option value="housing">Housing</option>
          <option value="hobbies">Sports, hobbies</option>
          <option value="technique">Technique</option>
          <option value="communal">Communal, communication</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>
        <input type="number" placeholder="0.00" className={s.input_calc}/>
        <button type="submit" className={s.btn_input}>Input</button>
        <button type="reset" className={s.btn_clear}>Clear</button>
      </form>
    </div>
  );
};

export default TransactionForm;
