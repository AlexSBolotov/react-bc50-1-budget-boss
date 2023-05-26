import { useMediaQuery } from 'react-responsive';
import s from './TransactionListMobile.module.scss';

const TransactionsListMobile = ({ selectedDate }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={s.mobileContainer}>
      {isMobile && (
        <ul className={s.mobileList}>
          <li className={s.mobileItem}>
            <div className={s.categoryContainer}>
              <p>Undeground</p>
              <div className={s.categoryWrapper}>
                <span>21.11.2019</span>
                <span>Transport</span>
              </div>
            </div>
            <div className={s.ammountWrapper}>
              <p>800</p>
              <button>Delete</button>
            </div>
          </li>
          <li className={s.mobileItem}>
            <div className={s.categoryContainer}>
              <p>Undeground</p>
              <div className={s.categoryWrapper}>
                <span>21.11.2019</span>
                <span>Transport</span>
              </div>
            </div>
            <div className={s.ammountWrapper}>
              <p>800</p>
              <button>Delete</button>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TransactionsListMobile;
