import TransactionsSummary from 'modules/moduleHome/components/TransactionsSummary/TransactionsSummary';
import TransactionsList from 'modules/moduleHome/components/TransactionsList/TransactionsList';

const TransactionContainer = () => {
  return (
    <section>
      <TransactionsList />
      <TransactionsSummary />
    </section>
  );
};

export default TransactionContainer;
