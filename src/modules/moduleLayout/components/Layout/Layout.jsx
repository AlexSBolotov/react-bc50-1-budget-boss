import Header from 'modules/moduleLayout/components/Header/Header';
import Loader from 'modules/shared/components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import s from 'modules/moduleLayout/components/Layout/Layout.module.scss';

const Layout = () => {
  return (
    <>
      <div className={s.container}>
        <Header />
        <Loader />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
