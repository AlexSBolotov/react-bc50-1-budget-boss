import Balance from 'modules/shared/components/Balance/Balance';
import PeriodSelector from 'modules/moduleReports/components/PeriodSelector/PeriodSelector';
import GoHomeLink from 'modules/moduleReports/components/GoHomeLink/GoHomeLink';
import { NavLink } from 'react-router-dom';

const ReportBar = () => {
  return (
    <section>
      <NavLink to="/home">
        <GoHomeLink />
      </NavLink>
      <Balance />
      <PeriodSelector />
    </section>
  );
};

export default ReportBar;
