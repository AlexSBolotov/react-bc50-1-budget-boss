import { Navigate, Route, Routes } from 'react-router-dom';
import LoginRegister from 'pages/LoginRegister/LoginRegistrer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from 'redux/auth/authOperations';
import { selectAccessToken, selectAuth } from 'redux/auth/authSelectors';
import Layout from '../modules/moduleLayout/components/Layout/Layout';
import Report from 'pages/Report/Report';
import Home from 'pages/Home/Home';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import Header from 'modules/moduleLayout/components/Header/Header';

export const App = () => {
  const isAuth = useSelector(selectAuth);
  const token = useSelector(selectAccessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getAuthUser());
    }
  }, [dispatch, token]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute component={LoginRegister} redirectTo="/home" />
            }
          />
          <Route
            path="home"
            element={<PrivateRoute component={Home} redirectTo="/" />}
          />
          <Route path="reports" element={<Report />} />
          {/* <Route path='google-redirect' element={<h1>This is google redirect page</h1>}/> */}
          <Route
            path="*"
            element={!isAuth ? <Navigate to="/" /> : <Navigate to="/home" />}
          />
        </Route>
      </Routes>
    </>
  );
};
