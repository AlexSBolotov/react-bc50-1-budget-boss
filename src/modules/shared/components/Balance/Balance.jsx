import { useState } from 'react';
import { useSelector } from 'react-redux';

import BalanceModal from '../BalanceModal/BalanceModal';
import BtnConfirmBalance from './BtnConfirmBalance';
import { selectBalance } from 'redux/auth/authSelectors';

import s from './Balance.module.css';

const Balance = () => {
  const initialBalance = useSelector(selectBalance);
  const [input, setInput] = useState(`${initialBalance.toFixed(2)} UAH`);

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className={s.balance_form}>
      <h2 className={s.balance_title}>Balance:</h2>
      <span className={s.balance_value_span}>
        <input
          className={s.balance_value}
          name="balance"
          title="Field must contain only numbers"
          type="number"
          value={input}
          onChange={handleChange}
          placeholder={
            initialBalance === 0
              ? `00.00 UAH`
              : `${initialBalance.toFixed(2)} UAH`
          }
        />
      </span>

      {!initialBalance && <BtnConfirmBalance balanceToUpdate={input} />}
      {!initialBalance && <BalanceModal />}
    </div>
  );
};

export default Balance;
