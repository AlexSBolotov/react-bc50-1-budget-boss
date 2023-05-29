import Balance from 'modules/shared/components/Balance/Balance';
import ReportsLink from 'modules/moduleHome/components/ReportsLink/ReportsLink';
import { NavLink } from 'react-router-dom';
import TransactionsNav from 'modules/moduleHome/components/TransactionsNav/TransactionsNav';
import s from 'modules/moduleHome/components/HomeBar/HomeBar.module.scss';
import { selectBalance } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';


const HomeBar = () => {
  const initialBalance = useSelector(selectBalance);

  
  
  return (
    <section>
      <div
        className={s.bar}
        style={{ gap: initialBalance === 0 ? '251px' : '391px' }}
      >
        <NavLink
          to="/reports"
          style={{ pointerEvents: initialBalance === 0 ? 'none' : 'auto' }}
        >
          <ReportsLink />
        </NavLink>
        <Balance />
      </div>
      <TransactionsNav />
    </section>
  );
};

export default HomeBar;
