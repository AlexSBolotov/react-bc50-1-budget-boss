import { Navigate, Route, Routes } from 'react-router-dom';
import LoginRegistration from 'pages/LoginRegistration/LoginRegistration';
import Layout from './Layout/Layout';
import Report from 'pages/Report/Report';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginRegistration />} />
        <Route path="home" element={<Home />}/>
        <Route path="reports" element={<Report />} />
        {/* <Route path='google-redirect' element={<h1>This is google redirect page</h1>}/> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
