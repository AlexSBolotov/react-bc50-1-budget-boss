import { useMediaQuery } from 'react-responsive';
import s from './TransactionContainer.module.css';

import TransactionsSummary from 'modules/moduleHome/components/TransactionsSummary/TransactionsSummary';
import TransactionsList from 'modules/moduleHome/components/TransactionsList/TransactionsList';
import TransactionsListMobile from '../TransactionListMobile/TransactionListMobile';


const TransactionContainer = ({ selectedDate }) => {
   const isMobile = useMediaQuery({ maxWidth: 767 });
  //  const isTablet = useMediaQuery({ maxWidth: 1199 });
  //  const isDesktop = useMediaQuery({ maxWidth: 1279 });
  return (
    <section className={s.container}>
      {isMobile ? <TransactionsListMobile selectedDate={selectedDate} /> :<div className={s.tab_deskContainer}><TransactionsList selectedDate={selectedDate} />
      <TransactionsSummary /></div> }
      
      
    </section>
  );
};

export default TransactionContainer;
