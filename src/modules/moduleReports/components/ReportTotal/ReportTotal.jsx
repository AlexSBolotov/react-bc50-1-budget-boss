import PropTypes from 'prop-types';
import s from 'modules/moduleReports/components/ReportTotal/ReportTotal.module.scss';

const ReportTotal = ({ data }) => {
  const format = value =>
    new Intl.NumberFormat('ru-RU', {
      style: 'decimal',
      currency: 'UAH',
      currencyDisplay: 'name',
      signDisplay: 'always',
      minimumFractionDigits: 2,
      useGrouping: 'min2',
      unitDisplay: 'long',
    }).format(value);
  console.log(format(10000000000));

  return (
    <div className={s.items}>
      <div className={s.itemExpenses}>
        <span>Expenses:</span>
        <span className={s.expenses}>
          - {data?.totalExpenses || '00.00'} UAH.
        </span>
      </div>
      <div className={s.itemIncomes}>
        Income:
        <span className={s.incomes}>{data?.totalIncomes || '00.00'} UAH.</span>
      </div>
    </div>
  );
};

export default ReportTotal;

ReportTotal.propTypes = {
  data: PropTypes.object,
};
