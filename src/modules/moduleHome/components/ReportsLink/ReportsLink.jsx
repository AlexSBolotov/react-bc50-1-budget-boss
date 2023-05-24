import s from './ReportsLink.module.css'
const Reports = () => {
  return (
    <div className={s.divToReports}>
      <p to="/report" className={s.GoToReportsLink}>
        Reports
      
      </p>
    </div>
  );
};

export default Reports;
