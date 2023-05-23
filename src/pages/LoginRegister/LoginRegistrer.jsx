import LoginForm from 'modules/moduleLoginRegister/components/LoginForm/LoginForm';
import wallet from 'modules/shared/images/wallet.png';

export default function LoginRegister() {
  return (
    <div>
      <img src={wallet} alt="wallet" />
      <LoginForm />
    </div>
  );
}
