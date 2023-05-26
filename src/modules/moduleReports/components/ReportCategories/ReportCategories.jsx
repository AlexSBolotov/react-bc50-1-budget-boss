import { useSelector } from 'react-redux';
import { selectPeriod } from 'redux/transaction/transactionSelectors';
import s from 'modules/moduleReports/components/ReportCategories/ReportCategories.module.scss';
import * as images from 'modules/moduleReports';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ReportCategories = ({ onclick }) => {
  const periodData = useSelector(selectPeriod);

  let expenses = null;
  // let incomes = null;
  if (periodData) {
    expenses = Object.entries(periodData.expenses.expensesData);
    // incomes = Object.entries(periodData.incomes.incomesData);

    expenses = [...expenses]
      .sort((b, a) => a[1].total - b[1].total)
      .map((item, index) => {
        return (
          <li key={index} className={s.item} onClick={() => onclick(item)}>
            <p>{item[1].total}</p>
            <div>
              <img src={images.products} alt={item[0]} />
            </div>
            <p>{item[0]}</p>
          </li>
        );
      });
  }

  function handleChoise(params) {}
  return (
    <div className={s.categories}>
      <div className={s.titleReports}>
        <button className={s.btn}>
          <MdKeyboardArrowLeft
            size="26"
            color="green"
            onClick={() => handleChoise()}
          />
        </button>
        <h2>EXPRENSES </h2>
        <button className={s.btn} onClick={() => handleChoise()}>
          <MdKeyboardArrowRight size="26" color="green" />
        </button>
      </div>
      <ul className={s.items}>{expenses}</ul>
    </div>
  );
};

export default ReportCategories;
