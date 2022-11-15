import Container from 'components/Container';
import DailyCaloriesForm from 'components/DailyCaloriesForm';

const CalculatorPage = () => {
  return (
    <Container>
      <div>
        <h1>Calculate your daily calorie intake right now</h1>
        <DailyCaloriesForm />
      </div>
      {/* <RightSideBar
          date={date}
          userParams={userParams}
          userProducts={userProducts}
        /> */}
    </Container>
  );
};
export default CalculatorPage;
