import Container from 'components/Container';
import Header from 'components/Header';
import Loader from 'components/Loader';
import LoginForm from 'components/LoginForm';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <Header />
      <Container>
        <LoginForm />
      </Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default LoginPage;
