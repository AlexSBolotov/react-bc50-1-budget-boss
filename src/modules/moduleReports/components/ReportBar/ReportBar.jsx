import Balance from 'modules/shared/components/Balance/Balance';
import PeriodSelector from 'modules/moduleReports/components/PeriodSelector/PeriodSelector';
import GoHomeLink from 'modules/moduleReports/components/GoHomeLink/GoHomeLink';
import { NavLink } from 'react-router-dom';
import s from 'modules/moduleReports/components/ReportBar/bar.module.scss';

const ReportBar = ({ onClick }) => {
  return (
    <div className={s.bar}>
      <NavLink to="/home">
        <GoHomeLink />
      </NavLink>
      <Balance />
      <PeriodSelector onClick={onClick} />
    </div>
  );
};

export default ReportBar;
