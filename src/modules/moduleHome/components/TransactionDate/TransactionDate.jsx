import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TransactionDate.scss';
import { enGB } from 'date-fns/locale';

const TransactionDate = ({ selectedDate, setSelectedDate }) => {
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
        onChange={date => {
          setSelectedDate(date);
          // console.log(selectedDate);
        }}
        locale={enGB}
        maxDate={new Date()}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};
export default TransactionDate;
// допилить логику перезагрузки страницы. Если выбираем дату на дейт пикере а потом обновляем страницу - дата ставится на сегодня.
// МЕМОИЗАЦИЯ
