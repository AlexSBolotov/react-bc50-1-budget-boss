import Balance from 'components/Balance/Balance';
import PeriodSelector from 'components/PeriodSelector/PeriodSelector';
import GoHomeLink from 'components/GoHomeLink/GoHomeLink';
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
