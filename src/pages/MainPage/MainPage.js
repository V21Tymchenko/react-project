import Container from 'components/Container';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Outlet />
    </>
  );
};
export default MainPage;
