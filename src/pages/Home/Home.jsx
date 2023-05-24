import HomeBar from 'modules/moduleHome/components/HomeBar/HomeBar';
import TransactionContainer from 'modules/moduleHome/components/TransactionContainer/TransactionContainer';
import TransactionForm from 'modules/moduleHome/components/TransactionForm/TransactionForm';
import TransactionDate from 'modules/moduleHome/components/TransactionDate/TransactionDate';

const Home = () => {
  return (
    <section>
      <HomeBar />

      <TransactionDate />
      <TransactionForm />
      <TransactionContainer />
    </section>
  );
};

export default Home;
