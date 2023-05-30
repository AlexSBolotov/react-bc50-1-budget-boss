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
import {
  deleteTransactionById,
  deleteFromTransactionsStats,
} from 'redux/transaction/transactionSlice';
import { ReactComponent as Bucket } from 'modules/shared/images/svg/trashcan.svg';
import { useState } from 'react';
import ModalConsern from 'modules/moduleConfirmations/components/ModalConsern/ModalConsern';
import { categoryTranslationRuToEn } from '../TransactionForm/translateFunc';

const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};

const format1 = value => {
  const form = new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    currency: 'UAH',
    // currencyDisplay: 'name',
    // signDisplay: 'exceptZero',
    minimumFractionDigits: 2,
    useGrouping: 'min2',
  })
    .format(value)
    .replace(',', '.');

  return form.substring(0, 1) + ' ' + form.substring(1);
};

const TransactionsListMobile = ({ selectedDate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idTrans, setIdTrans] = useState(null);
  const [amount, setAmount] = useState(null);
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

  const toggleModal = (id, amount) => {
    setAmount(amount);
    setIdTrans(id);
    setModalIsOpen(p => !p);
  };

  const monthIndex = normalizedDate.slice(5, 7);
  const monthsArray = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const month = monthsArray[Number(monthIndex) - 1];
  
  const statsPayload = {
    month,
    amount: Number(amount),
  };

  const handlerDeleteClick = () => {
    dispatch(deleteFromTransactionsStats(statsPayload));
    dispatch(deleteTransaction(idTrans));
    dispatch(deleteTransactionById(idTrans));
  };

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
                      ? `${format1(el.amount)} UAH`
                      : `- ${format1(el.amount)} UAH`}
                  </p>
                  <button
                    onClick={() => toggleModal(el._id, el.amount)}
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
