import logo from 'images/logo.png';
import UserLogout from 'modules/moduleLayout/components/UserLogout/UserLogout';
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <UserLogout />
    </header>
  );
};

export default Header;
