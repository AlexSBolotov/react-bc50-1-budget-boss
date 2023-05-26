import TransactionsSummary from 'modules/moduleHome/components/TransactionsSummary/TransactionsSummary';
import TransactionsList from 'modules/moduleHome/components/TransactionsList/TransactionsList';
import TransactionsListMobile from '../TransactionListMobile/TransactionListMobile';

const TransactionContainer = ({ selectedDate }) => {
  return (
    <section>
      <TransactionsList selectedDate={selectedDate} />
      <TransactionsSummary />
      <TransactionsListMobile selectedDate={selectedDate} />
    </section>
  );
};

export default TransactionContainer;
