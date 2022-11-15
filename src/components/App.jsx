import CalculatorPage from 'pages/CalculatorPage';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route index element={<div>Home</div>} /> */}
        <Route path="register" element={<div>REGISTER</div>} />
        <Route path="login" element={<div>LOGIN</div>} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="diary" element={<div>DIARY</div>} />
      </Route>
    </Routes>
  );
};
