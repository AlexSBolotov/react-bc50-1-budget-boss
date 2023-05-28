import { Loader } from 'modules/shared/components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import s from 'modules/moduleLayout/components/Layout/Layout.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/authSelectors';
import Container from 'modules/shared/components/Container/Container';
import MainContainer from '../MainContainer/MainContainer';

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <MainContainer>
        <Container>
          {isLoading && <Loader />}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </MainContainer>
    </>
  );
};

export default Layout;
