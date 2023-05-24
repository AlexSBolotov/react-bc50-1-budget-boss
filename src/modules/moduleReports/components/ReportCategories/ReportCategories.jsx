import s from 'modules/moduleReports/components/ReportTotal/ReportTotal.module.scss';
const ReportCategories = () => {
  return (
    <div className={s.reportCategories}>
      <span>{'<'}</span>
      <h2 className="title-reports">EXPRENSES</h2>
      <span>{'>'}</span>
    </div>
  );
};

export default ReportCategories;
