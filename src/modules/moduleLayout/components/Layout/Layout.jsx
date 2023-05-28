import { Loader } from 'modules/shared/components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import s from 'modules/moduleLayout/components/Layout/Layout.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/authSelectors';

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <div className={s.container}>
        {isLoading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
