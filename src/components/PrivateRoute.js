import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth, selectRefreshToken } from 'redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectAuth);
  const isRefresh = useSelector(selectRefreshToken);
  const shouldRedirect = !isRefresh && !isAuth;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func,
  redirectTo: PropTypes.string,
};
