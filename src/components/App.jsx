import { Navigate, Route, Routes } from 'react-router-dom';
import LoginRegister from 'pages/LoginRegister/LoginRegistrer';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from 'redux/auth/authOperations';
import {
  selectAccessToken,
  selectAuth,
  selectRefreshUser,
} from 'redux/auth/authSelectors';
import Layout from 'modules/moduleLayout/components/Layout/Layout';
import Header from 'modules/moduleLayout/components/Header/Header';
import s from './App.module.scss';

const Report = lazy(() => import('pages/Report/Report'));
const Home = lazy(() => import('pages/Home/Home'));
const RestrictedRoute = lazy(() => import('./RestrictedRoute'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));

export const App = () => {
  const isAuth = useSelector(selectAuth);
  const isRefreshUser = useSelector(selectRefreshUser);
  const token = useSelector(selectAccessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getAuthUser());
    }
  }, [dispatch, token]);

  return (
    !isRefreshUser && (
      <div className={s.body}>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<PrivateRoute component={Home} redirectTo="/register" />}
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={LoginRegister} redirectTo="/" />
              }
            />

            <Route
              path="reports"
              element={
                <PrivateRoute component={Report} redirectTo="/register" />
              }
            />
            {/* <Route path='google-redirect' element={<h1>This is google redirect page</h1>}/> */}
            <Route
              path="*"
              element={
                !isAuth ? <Navigate to="/register" /> : <Navigate to="/" />
              }
            />
          </Route>
        </Routes>
      </div>
    )
  );
};
//test 3 for About Page
