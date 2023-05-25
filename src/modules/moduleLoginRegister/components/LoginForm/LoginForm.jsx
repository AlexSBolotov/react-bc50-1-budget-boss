import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';
import { loginUser, registerUser } from 'redux/auth/authOperations';
import { ReactComponent as IconGoogle } from 'modules/shared/images/svg/google.svg';
import {
  AuthButton,
  AuthButtonWrapper,
  AuthDescr,
  AuthInput,
  AuthLabel,
  AuthWrapper,
  ErrorText,
  ErrorWrapper,
  Form,
  FormWrapper,
  GoogleBtnWrapper,
  GoogleButton,
  GoogleLink,
  GoogleTitle,
  LabelTitle,
} from 'modules/moduleLoginRegister/components/LoginForm/LoginForm.styled';
import { useState } from 'react';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be valid email')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 6 characters')
    .required('Password is a required field'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const [isLogin, setIsLogin] = useState(null);

  const handleBtnClick = e => {
    setIsLogin(e.target.name);
  };

  return (
    <AuthWrapper>
      <GoogleTitle>You can log in with your Google Account:</GoogleTitle>

      <GoogleButton type="button">
        <GoogleBtnWrapper>
          <IconGoogle />
          <GoogleLink href="https://kapusta-backend.goit.global/auth/google">
            Google
          </GoogleLink>
        </GoogleBtnWrapper>
      </GoogleButton>
      <AuthDescr>
        Or log in using an email and password, after registering:
      </AuthDescr>

      <Formik
        initialValues={formik.initialValues}
        onSubmit={(values, { resetForm }) => {
          isLogin === 'login'
            ? dispatch(
                loginUser({
                  email: values.email,
                  password: values.password,
                })
              )
            : dispatch(
                registerUser({
                  email: values.email,
                  password: values.password,
                })
              );
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmitting,
        }) => (
          <FormWrapper>
            <Form autoComplete="on" onSubmit={handleSubmit}>
              <AuthLabel htmlFor={'email'}>
                <LabelTitle>Email</LabelTitle>
                <AuthInput
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="your@email.com"
                />
                <ErrorWrapper>
                  <ErrorText>
                    {errors.email && touched.email && errors.email}
                  </ErrorText>
                </ErrorWrapper>
              </AuthLabel>

              <AuthLabel htmlFor={'password'}>
                <LabelTitle>Password</LabelTitle>
                <AuthInput
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="• • • • • • • •"
                />
                <ErrorWrapper>
                  <ErrorText>
                    {errors.password && touched.password && errors.password}
                  </ErrorText>
                </ErrorWrapper>
              </AuthLabel>

              <AuthButtonWrapper>
                <AuthButton type="submit" name="login" onClick={handleBtnClick}>
                  Log in
                </AuthButton>
                <AuthButton
                  type="submit"
                  name="register"
                  onClick={handleBtnClick}
                >
                  Registration
                </AuthButton>
              </AuthButtonWrapper>
            </Form>
          </FormWrapper>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default LoginForm;
