import CalculatorPage from 'pages/CalculatorPage';
import RegisterPage from 'pages/RegisterPage';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import DiaryPage from 'pages/DiaryPage';
import LoginPage from 'pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/auth/auth-operations';
import { stateAuthToken } from 'redux/auth/auth-selectors';

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
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="calculator" element={<div>CALCULATOR</div>} />
        <Route path="diary" element={<DiaryPage />} />
      </Route>
    </Routes>
  );
};
