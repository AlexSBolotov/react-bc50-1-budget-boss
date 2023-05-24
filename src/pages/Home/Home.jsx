import HomeBar from 'modules/moduleHome/components/HomeBar/HomeBar';
import TransactionContainer from 'modules/moduleHome/components/TransactionContainer/TransactionContainer';
import TransactionForm from 'modules/moduleHome/components/TransactionForm/TransactionForm';
// import s from './Home.module.css';

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
