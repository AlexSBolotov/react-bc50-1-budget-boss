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
import { categoryTranslationRuToEn } from '../TransactionForm/translateFunc';
import s from './TransactionsList.module.scss';
import { ReactComponent as Bucket } from 'modules/shared/images/svg/trashcan.svg';
import { useState } from 'react';
import ModalConsern from 'modules/moduleConfirmations/components/ModalConsern/ModalConsern';

const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};

const format1 = value => {
  const form = new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    currency: 'UAH',
    minimumFractionDigits: 2,
    useGrouping: 'min2',
  })
    .format(value)
    .replace(',', '.');

  return form.substring(0, 1) + ' ' + form.substring(1);
};

const TransactionsList = ({ selectedDate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idTrans, setIdTrans] = useState(null);
  const [amount, setAmount] = useState(null);

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
      <div className={s.container}>
        <table className={s.table}>
          <thead className={s.header}>
            <tr className={s.header_line}>
              <th className={s.header_text}>Date</th>
              <th className={s.header_text}>Description</th>
              <th className={s.header_text_third}>Category</th>
              <th className={s.header_text_fourth}>Sum</th>
              <th className={s.header_text}></th>
            </tr>
          </thead>
          <tbody className={s.body}>
            {filteredTransactions.map(trans => (
              <tr key={trans._id} className={s.body_line}>
                <td className={s.body_item}>{trans.date}</td>
                <td className={s.body_item_second}>{trans.description}</td>
                <td className={s.body_item}>
                  {categoryTranslationRuToEn(trans.category)}
                </td>
                <td
                  style={{
                    color:
                      currentTransactionType === 'incomes'
                        ? '#60C470'
                        : '#FE4566',
                  }}
                  className={s.body_item_red}
                >
                  {currentTransactionType === 'incomes'
                    ? `${format1(trans.amount)} UAH`
                    : `- ${format1(trans.amount)} UAH`}
                </td>
                <td className={s.body_item}>
                  <button
                    type="button"
                    onClick={() => toggleModal(trans._id, trans.amount)}
                    className={s.button}
                  >
                    <Bucket className={s.icon} />
                  </button>
                </td>
              </tr>
            ))}
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
            <tr className={s.body_line} style={{ height: 38 }}>
              <td className={s.body_item}></td>
              <td className={s.body_item_second}></td>
              <td className={s.body_item}></td>
              <td className={s.body_item_red}></td>
              <td></td>
            </tr>
          </tbody>
        </table>
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

export default TransactionsList;
