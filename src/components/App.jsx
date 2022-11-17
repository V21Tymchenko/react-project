import CalculatorPage from 'pages/CalculatorPage';
import RegisterPage from 'pages/RegisterPage';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import DiaryPage from 'pages/DiaryPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/auth/auth-operations';
import { stateAuthToken } from 'redux/auth/auth-selectors';
import LoginPage from 'pages/LoginPage/LoginPage';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(stateAuthToken);

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="/" element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="diary" element={<DiaryPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
