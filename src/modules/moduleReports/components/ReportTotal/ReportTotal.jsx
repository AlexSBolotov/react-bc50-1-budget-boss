import PropTypes from 'prop-types';

const ReportTotal = ({ data }) => {
  // const { expenses, incomes } = data;
  return (
    <section>
      Expenses: - {data?.expenses.expenseTotal || '00'} UAH | Income:
      {data?.incomes.incomeTotal || '00'} UAH
    </section>
  );
};

export default ReportTotal;

ReportTotal.propTypes = {
  data: PropTypes.object,
};
