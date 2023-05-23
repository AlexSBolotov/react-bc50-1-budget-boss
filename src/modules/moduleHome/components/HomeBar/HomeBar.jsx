import Balance from 'modules/shared/components/Balance/Balance';
import ReportsLink from 'modules/moduleHome/components/ReportsLink/ReportsLink';
import { NavLink } from 'react-router-dom';
import TransactionsNav from 'modules/moduleHome/components/TransactionsNav/TransactionsNav';

const HomeBar = () => {
  return (
    <section>
      <Balance />
      <NavLink to="/reports">
        <ReportsLink />
      </NavLink>
      <TransactionsNav />
    </section>
  );
};

export default HomeBar;
