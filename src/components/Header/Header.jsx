import logo from 'images/logo.png';
import UserLogout from 'components/UserLogout/UserLogout';
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <UserLogout />
    </header>
  );
};

export default Header;
