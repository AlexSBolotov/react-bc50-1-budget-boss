
import s from './ReportsLink.module.css';

const ReportsLink = () => {
  return (
    <div className={s.divToReports}>
      <span to="/report" className={s.reports}>
        Reports
      </span>
    </div>
  );
};

export default ReportsLink;
