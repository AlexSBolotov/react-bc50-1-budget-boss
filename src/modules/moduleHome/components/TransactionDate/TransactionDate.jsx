import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TransactionDate.scss';
import { enGB } from 'date-fns/locale';

const TransactionDate = ({ selectedDate, setSelectedDate }) => {
  const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <input
      value={value}
      className="input_date"
      onClick={onClick}
      onChange={onChange}
      ref={ref}
      onKeyDown={e => {
        e.preventDefault();
      }}
    ></input>
  ));
  return (
    <div className="container">
      <DatePicker
        className="datepicker"
        dateFormat="dd.MM.yyyy"
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        locale={enGB}
        maxDate={new Date()}
        calendarClassName="calendar"
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};
export default TransactionDate;

