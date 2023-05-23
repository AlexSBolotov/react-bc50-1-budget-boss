import TransactionForm from 'components/TransactionForm/TransactionForm';
import TransactionsSummary from 'components/TransactionsSummary/TransactionsSummary';
import TransactionsNav from 'components/TransactionsNav/TransactionsNav';
import TransactionsList from 'components/TransactionsList/TransactionsList';

const TransactionContainer = () => {
  return (
    <section>
      <TransactionsNav />
      <TransactionForm />
      <TransactionsList />
      <TransactionsSummary />
    </section>
  );
};

export default TransactionContainer;
