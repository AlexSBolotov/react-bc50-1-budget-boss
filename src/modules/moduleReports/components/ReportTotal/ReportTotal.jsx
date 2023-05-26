import PropTypes from 'prop-types';
import s from 'modules/moduleReports/components/ReportTotal/ReportTotal.module.scss';

const ReportTotal = ({ data }) => {
  // const { expenses, incomes } = data;
  console.log(data);
  return (
    <div className={s.items}>
      <div className={s.itemExpenses}>
        <span>Expenses:</span>
        <span className={s.expenses}>
          - {data?.expenses.expenseTotal || '00'} UAH.
        </span>
      </div>
      <div className={s.itemIncomes}>
        Income:
        <span className={s.incomes}>
          {data?.incomes.incomeTotal || '00'} UAH.
        </span>
      </div>
    </div>
  );
};

export default ReportTotal;

ReportTotal.propTypes = {
  data: PropTypes.object,
};
