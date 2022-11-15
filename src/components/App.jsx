import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>}>
        <Route index element={<div>Home</div>} />
        <Route path="register" element={<div>REGISTER</div>} />
        <Route path="login" element={<div>LOGIN</div>} />
        <Route path="calculator" element={<div>CALCULATOR</div>} />
        <Route path="diary" element={<div>DIARY</div>} />
      </Route>
    </Routes>
  );
};
