import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TransactionDate.scss';
import { enGB } from 'date-fns/locale';

const TransactionDate = ({ setSelectedDate, selectedDate }) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };
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
        selected={selectedDate}
        onChange={date => handleDateChange(date)}
        locale={enGB}
        maxDate={new Date()}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};
export default TransactionDate;
// остается логика и позиционирование вместе с формой
