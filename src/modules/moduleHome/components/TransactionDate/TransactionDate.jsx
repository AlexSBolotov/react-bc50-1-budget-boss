import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TransactionDate.scss';
import { enGB } from 'date-fns/locale';

const TransactionDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      value={value}
      className="icon-input"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      onKeyDown={e => {
        e.preventDefault();
      }}
    ></input>
  ));
  return (
    <div className="wrapper-container">
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={date => setStartDate(date)}
        locale={enGB}
        maxDate={new Date()}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};
export default TransactionDate;
// остается логика и позиционирование вместе с формой
