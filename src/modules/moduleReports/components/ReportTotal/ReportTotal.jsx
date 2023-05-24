import PropTypes from 'prop-types';
import s from 'modules/moduleReports/components/ReportTotal/ReportTotal.module.scss';

const ReportTotal = ({ data }) => {
  // const { expenses, incomes } = data;
  return (
    <div className={s.items}>
      Expenses:
      <span className={s.expenses}>
        - {data?.expenses.expenseTotal || '00'} UAH.
      </span>
      | Income:
      <span className={s.incomes}>
        {data?.incomes.incomeTotal || '00'} UAH.
      </span>
    </div>
  );
};

export default ReportTotal;

ReportTotal.propTypes = {
  data: PropTypes.object,
};
