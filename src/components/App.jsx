import { Navigate, Route, Routes } from 'react-router-dom';
import LoginRegister from 'pages/LoginRegister/LoginRegistrer';
import Layout from '../modules/moduleLayout/components/Layout/Layout';
import Report from 'pages/Report/Report';
import Home from 'pages/Home/Home';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RestrictedRoute component={LoginRegister} redirectTo='/home' />} />
        <Route path="home" element={<PrivateRoute component={Home} redirectTo='/' />} />
        <Route path="reports" element={<Report />} />
        {/* <Route path='google-redirect' element={<h1>This is google redirect page</h1>}/> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
