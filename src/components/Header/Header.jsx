import logo from 'images/logo.png';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <img src={logo} alt="logo" />
      <div>
        <p>UserName</p>
        <button onClick={handleLogout} type="button">
          Exit
        </button>
      </div>
    </header>
  );
};

export default Header;
