// import s from './Balance.module.css';

// const Balance = () => {

//   return (
//     <>
//       <h2 className={s.balance_title}>Balance:</h2>
//       <input
//         className={s.balance_value}
//         type="number"
//         name="balance"
//         title="Please, enter your balance"
//         pattern="[0-9, .UAH]*"
//         placeholder={`00.00 UAH`}
//         required
//       />
//       <button type="submit" className={s.balance_submit}>
//         Confirm
//       </button>
//     </>
//   );

// }

// export default Balance;

import { useState } from 'react';
import { useSelector } from 'react-redux';

import BalanceModal from '../BalanceModal/BalanceModal';
import BtnConfirmBalance from './BtnConfirmBalance';

import { selectBalance } from 'redux/auth/authSelectors';

import s from './Balance.module.css';

const Balance = ({ displayStyle }) => {
  const initialBalance = useSelector(selectBalance);
  console.log(initialBalance);

  const [input, setInput] = useState(initialBalance);

  const handleChange = e => {
    setInput(e.target.value);
  };

  // useEffect(() => {
  //   setInput(initialBalance);
  // }, [initialBalance]);

  return (
    <div className={s.balance_form}>
      <h2 className={s.balance_title}>Balance:</h2>
      <span className={s.balance_value_span}>
        <input
          className={s.balance_value}
          name="balance"
          pattern="[0-9, .UAH]*"
          title="Field must contain only numbers"
          type="number"
          value={input}
          onChange={handleChange}
          placeholder={`00.00 UAH`}
        />
      </span>

      {!initialBalance && (
        <BtnConfirmBalance input={input} displayStyle={displayStyle} />
      )}
      {!initialBalance && <BalanceModal />}
    </div>
  );
};

export default Balance;
