import PropTypes from 'prop-types';
import s from 'modules/moduleReports/components/ReportTotal/ReportTotal.module.scss';

const ReportTotal = ({ data }) => {
  const format = value => {
    const form = new Intl.NumberFormat('ru-RU', {
      style: 'decimal',
      currency: 'UAH',
      // currencyDisplay: 'name',
      signDisplay: 'exceptZero',
      minimumFractionDigits: 2,
      useGrouping: 'min2',
      unitDisplay: 'short',
    })
      .format(value)
      .replace(',', '.');

    return form.substring(0, 1) + ' ' + form.substring(1);
  };

  return (
    <div className={s.items}>
      <div className={s.itemExpenses}>
        <span>Expenses:</span>
        <span className={s.expenses}>
          {format(data?.totalExpenses * -1) || '00.00'} UAH.
        </span>
      </div>
      <div className={s.itemIncomes}>
        Income:
        <span className={s.incomes}>
          {format(data?.totalIncomes) || '00.00'} UAH.
        </span>
      </div>
    </div>
  );
};

export default ReportTotal;

ReportTotal.propTypes = {
  data: PropTypes.object,
};
