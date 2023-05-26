import logo from 'modules/shared/images/logo.png';
import UserLogout from 'modules/moduleLayout/components/UserLogout/UserLogout';
import s from 'modules/moduleLayout/components/Header/Header.module.scss';

const Header = () => {
  return (
    <div className={s.headerContainer}>
      <header className={s.header}>
        <img className={s.headerLogo} src={logo} alt="logo" />
        <UserLogout />
      </header>
    </div>
  );
};

export default Header;
