import LoginForm from 'components/LoginForm/LoginForm';
import wallet from 'images/wallet.png';

const LoginRegistration = () => {
  return (
    <div>
      <img src={wallet} alt="wallet" />
      <LoginForm />
    </div>
  );
};

export default LoginRegistration;
