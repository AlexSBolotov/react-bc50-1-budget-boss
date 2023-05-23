import TransactionsSummary from 'components/TransactionsSummary/TransactionsSummary';
import TransactionsList from 'components/TransactionsList/TransactionsList';

const TransactionContainer = () => {
  return (
    <section>
      <TransactionsList />
      <TransactionsSummary />
    </section>
  );
};

export default TransactionContainer;
