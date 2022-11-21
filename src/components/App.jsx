// import CalculatorPage from 'pages/CalculatorPage';
// import RegisterPage from 'pages/RegisterPage';
// import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
// import DiaryPage from 'pages/DiaryPage';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';

import { stateAuthToken } from 'redux/auth/auth-selectors';
// import LoginPage from 'pages/LoginPage/LoginPage';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import { useMediaQuery } from 'react-responsive';
import NotFound from 'pages/NotFound/NotFound';

import { lazy } from 'react';
import { current } from 'redux/user/user-operation';
// import Loader from './Loader';
import Header from './Header';

const MainPage = lazy(() => import('pages/MainPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const MobilNavPage = lazy(() => import('pages/MobilNavPage/MobilNavPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(stateAuthToken);
  const isDesctop = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [dispatch, token]);

  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="/" element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/diary" element={<DiaryPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
