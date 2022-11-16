import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm';
// import RightSideBar from 'components/RightSideBar';

const CalculatorPage = () => {
  return (
    <>
      <Container>
        <DailyCaloriesForm />
      </Container>
      {/* <RightSideBar
        // date={date}
        // userParams={userParams}
        // userProducts={userProducts}
      /> */}
    </>
  );
};
export default CalculatorPage;
