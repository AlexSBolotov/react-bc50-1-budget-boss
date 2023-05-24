import s from './Balance.module.css';

const Balance = () => {

  return (
    <>
      <h2 className={s.balance_title}>Balance:</h2>
      <input
        className={s.balance_value}
        type="number"
        name="balance"
        title="Please, enter your balance"
        pattern="[0-9, .UAH]*"
        placeholder={`00.00 UAH`}
        required
      />
      <button type="submit" className={s.balance_submit}>
        Confirm
      </button>
    </>
  );
  
}  

export default Balance;
