import PropTypes from 'prop-types';
import { s } from 'modules/moduleReports/components/ReportTotal/ReportTotal.module.scss';

const ReportTotal = ({ data }) => {
  // const { expenses, incomes } = data;
  return (
    <div className={s.items}>
      Expenses: - {data?.expenses.expenseTotal || '00'} UAH | Income:
      {data?.incomes.incomeTotal || '00'} UAH
    </div>
  );
};

export default ReportTotal;

ReportTotal.propTypes = {
  data: PropTypes.object,
};
