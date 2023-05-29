import { useState } from 'react';
import { useSelector } from 'react-redux';

import BalanceModal from '../BalanceModal/BalanceModal';
import BtnConfirmBalance from './BtnConfirmBalance';
import { selectBalance } from 'redux/auth/authSelectors';

import s from './Balance.module.scss';
import { selectNewBalance } from 'redux/transaction/transactionSelectors';

const Balance = () => {
  const initialBalance = useSelector(selectBalance);
  const newBalance = useSelector(selectNewBalance);
  const balance = newBalance === 0 ? initialBalance : newBalance;
  console.log(balance);

  const [input, setInput] = useState(`${initialBalance.toFixed(2)} UAH`); //!!! BUG:  The specified value "16160330.49 UAH" cannot be parsed, or is out of range.

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className={s.balance_form}>
      <h2 className={s.balance_title}>Balance:</h2>
        <input
          className={s.balance_value}
          name="balance"
          title="Field must contain only numbers"
          type="number"
          value={input}
          onChange={handleChange}
          disabled={initialBalance === 0 ? false : true}
          style={{
            borderRadius: initialBalance === 0 ? '22px 0px 0px 22px' : '22px',
            borderRight: initialBalance === 0 ? 'none' : '2px solid #80848F',
            textAlign: initialBalance === 0 ? 'right' : 'center',
          }}
          placeholder={
            initialBalance === 0 ? `00.00 UAH` : `${balance.toFixed(2)} UAH`
          }
        />

      {!initialBalance && <BtnConfirmBalance balanceToUpdate={input} />}
      {!initialBalance && <BalanceModal />}
    </div>
  );
};

export default Balance;
