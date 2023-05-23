import Balance from 'components/Balance/Balance';
import ReportsLink from 'components/ReportsLink/ReportsLink';
import { NavLink } from 'react-router-dom';
import TransactionsNav from 'components/TransactionsNav/TransactionsNav';

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
