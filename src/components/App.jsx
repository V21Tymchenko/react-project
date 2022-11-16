import CalculatorPage from 'pages/CalculatorPage';
import RegisterPage from 'pages/RegisterPage';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import DiaryPage from 'pages/DiaryPage';
import LoginPage from 'pages/LoginPage';

export const App = () => {
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
