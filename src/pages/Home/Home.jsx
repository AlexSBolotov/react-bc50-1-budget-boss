import { useMediaQuery } from 'react-responsive';
import HomeBar from 'modules/moduleHome/components/HomeBar/HomeBar';
import TransactionContainer from 'modules/moduleHome/components/TransactionContainer/TransactionContainer';
import TransactionForm from 'modules/moduleHome/components/TransactionForm/TransactionForm';
import TransactionDate from 'modules/moduleHome/components/TransactionDate/TransactionDate';
import { useEffect, useState } from 'react';
import {
  getTransactionExpenseCategories,
  getTransactionIncomeCategories,
} from 'redux/reports/reportsOperations';
import {
  getTransactionIncome,
  getTransactionExpense,
} from 'redux/transaction/transactionOperations';
import { useDispatch } from 'react-redux';
import s from './Home.module.scss';
import MobileTransactionModal from 'modules/moduleHome/components/MobileTransactionModal/MobileTransactionModal';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const currentDate = new Date();
  const storagedDate = sessionStorage.getItem('date') || currentDate;
  const parsedStorageDate = new Date(storagedDate);
  const dateToSet = parsedStorageDate ? parsedStorageDate : currentDate;
  const [selectedDate, setSelectedDate] = useState(dateToSet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionExpenseCategories());
    dispatch(getTransactionIncomeCategories());
    dispatch(getTransactionIncome());
    dispatch(getTransactionExpense());
  }, [dispatch]);

  const handlerDate = date => {
    sessionStorage.setItem('date', JSON.stringify(date.toString()));
    setSelectedDate(date);
  };
  const toggleModal = () => {
    setModalIsOpen(p => !p);
  };

  return (
    <>
      <HomeBar />
      <div className={s.container}>
        {!isMobile ? (
          <div className={s.tab_deskWrap}>
            <div className={s.form_wrap}>
              <TransactionDate
                selectedDate={selectedDate}
                setSelectedDate={date => handlerDate(date)}
              />
              <TransactionForm selectedDate={selectedDate} />
            </div>

            <TransactionContainer selectedDate={selectedDate} />
          </div>
        ) : (
          <>
            <div className={s.mobWrap}>
              <TransactionDate
                selectedDate={selectedDate}
                setSelectedDate={date => handlerDate(date)}
              />
              <button
                type="button"
                className={s.open_modal}
                onClick={toggleModal}
              >
                Add transaction
              </button>
              <TransactionContainer selectedDate={selectedDate} />
            </div>
            {modalIsOpen && (
              <MobileTransactionModal
                selectedDate={selectedDate}
                closeModal={toggleModal}
                onClose={toggleModal}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
