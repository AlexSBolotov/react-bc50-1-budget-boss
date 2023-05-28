import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import {
  selectCurrentTransactionType,
  selectExpenses,
  selectIncomes,
} from 'redux/transaction/transactionSelectors';
import { format } from 'date-fns';
import { deleteTransactionById } from 'redux/transaction/transactionSlice';
import { getAuthUser } from 'redux/auth/authOperations';
import { categoryTranslationRuToEn } from '../TransactionForm/translateFunc';
import s from './TransactionsList.module.scss';
import { ReactComponent as Bucket } from 'modules/shared/images/svg/trashcan.svg';
import { useState } from 'react';
import ModalConsern from 'modules/moduleConfirmations/components/ModalConsern/ModalConsern';

const formatEventStart = date => {
  return format(Date.parse(date), 'yyyy-MM-dd');
};

const TransactionsList = ({ selectedDate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idTrans, setIdTrans] = useState(null);

  const currentTransactionType = useSelector(selectCurrentTransactionType);
  const incomes = useSelector(selectIncomes);

  const expenses = useSelector(selectExpenses);

  const dispatch = useDispatch();
  const normalizedDate = formatEventStart(selectedDate);

  const filteredTransactions =
    currentTransactionType === 'incomes'
      ? incomes.filter(transaction => transaction.date === normalizedDate)
      : expenses.filter(transaction => transaction.date === normalizedDate);
   const toggleModal = id => {
    setIdTrans(id);
    setModalIsOpen(p => !p);
  };

  // const handleClickDelete = () => {
  //   setIdTrans(trans._id);
  // };

  const handlerDeleteClick = () => {
    dispatch(deleteTransaction(idTrans));
    dispatch(deleteTransactionById(idTrans));
    setTimeout(() => {
      dispatch(getAuthUser());
    }, 200);
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
                    ? `${trans.amount} UAH`
                    : `- ${trans.amount} UAH`}
                </td>
                <td className={s.body_item}>
                  <button
                    type="button"
                    onClick={() => toggleModal(trans._id)}
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

// {() => handlerDeleteClick(trans._id)}
// handlerDeleteClick(idTrans)
