
import { useDispatch } from 'react-redux';
import { updateUserBalanceApi } from '../../../../services/kapustaApi';
import s from './Balance.module.css';

const BtnConfirmBalance = ({ input, displayStyle }) => {
  const dispatch = useDispatch();

  const addBalance = () => {
    const newBalance = Number(input);

    if (newBalance > 0) {
      dispatch(
        updateUserBalanceApi.handleUpdateUserBalance({ newBalance: newBalance })
      );
    } else {
      alert('The balance must be positive');
    }
  };

  return (
    <button
      type="button"
      className={s.balance_submit}
      onClick={addBalance}
    >
      Confirm
    </button>
  );
};

export default BtnConfirmBalance;
