import { useDispatch } from 'react-redux';
import s from './Balance.module.css';
import { setNewBalance, getAuthUser } from 'redux/auth/authOperations';

const BtnConfirmBalance = ({ balanceToUpdate }) => {
  const dispatch = useDispatch();
  const addBalance = () => {
    const newBalance = Number(balanceToUpdate);
    console.log(newBalance);
    if (newBalance > 0) {
      dispatch(setNewBalance({ newBalance: newBalance }));
      setTimeout(() => {
        dispatch(getAuthUser());
      }, 200);
    } else {
      alert('The balance must be positive');
    }
  };

  return (
    <button type="button" className={s.balance_submit} onClick={addBalance}>
      Confirm
    </button>
  );
};

export default BtnConfirmBalance;
