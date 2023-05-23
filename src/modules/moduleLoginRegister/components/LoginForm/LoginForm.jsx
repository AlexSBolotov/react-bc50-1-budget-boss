import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from 'redux/auth/authOperations';


const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const formValues = {
      email: form.email.value,
      password: form.password.value,
    };
    const submit = event.nativeEvent.submitter.name;
    submit === 'login'
      ? dispatch(loginUser(formValues))
      : dispatch(registerUser(formValues));
  };

  return (
    <div>
      <h1>You can log in with your Google Account:</h1>
      <a href="https://kapusta-backend.goit.global/auth/google">Google</a>
      <form onSubmit={handleSubmit}>
        <h2>Or log in using an email and password, after registering:</h2>
        <label>
          <p>Email</p>
          <input type="email" name="email" placeholder="your@email.com" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" placeholder="••••••••" />
        </label>
        <button name="login" type="submit">
          Log in
        </button>
        <button name="register" type="submit">
          Registration
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
