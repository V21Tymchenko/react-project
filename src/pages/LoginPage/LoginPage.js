import Container from 'components/Container';
import Header from 'components/Header';
import LoginForm from 'components/LoginForm';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <Container>
        <Header />
        <LoginForm />
      </Container>
      <Outlet />
    </>
  );
}
