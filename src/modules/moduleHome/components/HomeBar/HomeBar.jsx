import Balance from 'modules/shared/components/Balance/Balance';
import ReportsLink from 'modules/moduleHome/components/ReportsLink/ReportsLink';
import { NavLink } from 'react-router-dom';
import TransactionsNav from 'modules/moduleHome/components/TransactionsNav/TransactionsNav';
import s from 'modules/moduleHome/components/HomeBar/HomeBar.module.css';
const HomeBar = () => {
  return (
    <section >
      <div className={s.bar}>
        <NavLink to="/reports">
          <ReportsLink />
        </NavLink>
        <Balance />
      </div>
      <TransactionsNav />
    </section>
  );
};

export default HomeBar;
