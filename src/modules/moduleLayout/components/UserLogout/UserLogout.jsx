import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
export default function UserLogout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <p>UserName</p>
      <button onClick={handleLogout} type="button">
        Exit
      </button>
    </div>
  );
}
