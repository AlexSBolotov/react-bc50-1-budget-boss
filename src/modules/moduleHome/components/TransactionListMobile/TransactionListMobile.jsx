import { useMediaQuery } from 'react-responsive';
import s from './TransactionListMobile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import {
  selectCurrentTransactionType,
  selectExpenses,
  selectIncomes,
} from 'redux/transaction/transactionSelectors';
import { format } from 'date-fns';
import { deleteTransactionById } from 'redux/transaction/transactionSlice';
import { ReactComponent as Bucket } from 'modules/shared/images/svg/trashcan.svg';
import { useState } from 'react';
import ModalConsern from 'modules/moduleConfirmations/components/ModalConsern/ModalConsern';
import { categoryTranslationRuToEn } from '../TransactionForm/translateFunc';

const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};

const TransactionsListMobile = ({ selectedDate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idTrans, setIdTrans] = useState(null);
  //   console.log(selectedDate);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const currentTransactionType = useSelector(selectCurrentTransactionType);
  const incomes = useSelector(selectIncomes);
  const expenses = useSelector(selectExpenses);

  const dispatch = useDispatch();
  const normalizedDate = formatEventStart(selectedDate);

  const filteredTransactions =
    currentTransactionType === 'incomes'
      ? incomes.filter(transaction => transaction.date === normalizedDate)
      : expenses.filter(transaction => transaction.date === normalizedDate);
  // console.log(isMobile);

  const toggleModal = id => {
    setIdTrans(id);
    setModalIsOpen(p => !p);
  };

  const handlerDeleteClick = () => {
    dispatch(deleteTransaction(idTrans));
    dispatch(deleteTransactionById(idTrans));
    // setTimeout(() => {
    //   dispatch(getAuthUser());
    // }, 200);
  };
  // console.log(currentTransactionType);
  // console.log(filteredTransactions);

  return (
    <>
      <div className={s.mobileContainer}>
        {isMobile && (
          <ul className={s.mobileList}>
            {filteredTransactions.map(el => (
              <li className={s.mobileItem} key={el._id}>
                <div className={s.categoryContainer}>
                  <p className={s.categoryDescription}>{el.description}</p>
                  <div className={s.categoryWrapper}>
                    <span className={s.transactionDate}>{el.date}</span>
                    <span>{categoryTranslationRuToEn(el.category)}</span>
                  </div>
                </div>
                <div className={s.ammountWrapper}>
                  <p
                    className={s.transactionAmount}
                    style={{
                      color:
                        currentTransactionType === 'incomes'
                          ? '#60C470'
                          : '#FE4566',
                    }}
                  >
                    {currentTransactionType === 'incomes'
                      ? `${el.amount} UAH`
                      : `- ${el.amount} UAH`}
                  </p>
                  <button
                    onClick={() => toggleModal(el._id)}
                    className={s.button}
                  >
                    <Bucket className={s.icon} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {modalIsOpen && (
        <ModalConsern
          closeModal={toggleModal}
          onSubmit={handlerDeleteClick}
          title="Are you sure?"
        />
      )}
    </>
  );
};

export default TransactionsListMobile;
