import HomeBar from 'components/HomeBar/HomeBar';
import TransactionContainer from 'components/TransactionContainer/TransactionContainer';
import TransactionForm from 'components/TransactionForm/TransactionForm';

const Home = () => {
  return (
    <section>
      <HomeBar />
      <TransactionForm />
      <TransactionContainer />
    </section>
  );
};

export default Home;
