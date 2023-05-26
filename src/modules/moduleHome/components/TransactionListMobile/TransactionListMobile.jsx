import { useMediaQuery } from 'react-responsive';
import s from './TransactionListMobile.module.scss';

// const transactions = [
//   {
//     description: "Transaction's description",
//     category: 'Продукты',
//     amount: 400,
//     date: '2020-12-31',
//     _id: '507f1f77bcf86cd799439013',
//   },
//   {
//     description: "Transaction's description",
//     category: 'Авто',
//     amount: 600,
//     date: '2020-12-31',
//     _id: '507f1f77bcf86cd799439013',
//   },
// ];

const TransactionsListMobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={s.mobileContainer}>
      {isMobile && (
        <ul className={s.mobileList}>
          <li className={s.mobileItem}>
            <div className={s.categoryContainer}>
              <p className={s.categoryDescription}>Undeground</p>
              <div className={s.categoryWrapper}>
                <span className={s.transactionDate}>21.11.2019</span>
                <span>Transport</span>
              </div>
            </div>
            <div className={s.ammountWrapper}>
              <p className={s.transactionAmount}>800 {'UAH'}</p>
              <button>Delete</button>
            </div>
          </li>
          <li className={s.mobileItem}>
            <div className={s.categoryContainer}>
              <p className={s.categoryDescription}>Undeground</p>
              <div className={s.categoryWrapper}>
                <span className={s.transactionDate}>21.11.2019</span>
                <span>Transport</span>
              </div>
            </div>
            <div className={s.ammountWrapper}>
              <p className={s.transactionAmount}>1000 {'UAH'}</p>
              <button>Delete</button>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TransactionsListMobile;
