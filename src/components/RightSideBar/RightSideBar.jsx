import { useSelector } from 'react-redux';

// import { kCalUSer } from 'redux/dailyRate/dailyRate-selectors';
// import { dailyRate, notAllowedProducts } from 'redux/user/user-selectors';

const RightSideBar = () => {
  const kcal = useSelector(state => state.dailyRate.dailyRate);
  const arrNotAllowedProducts = useSelector(
    state => state?.dailyRate?.notAllowedProducts
  );
  const newArrNotAllowedProducts = [...arrNotAllowedProducts].slice(0, 5);
  // const newArrNotAllowedProducts = [...arrNotAllowedProducts].slice(0, 5);

  return (
    <>
      <h2>Summary for 06/20/2020</h2>
      <div>
        <p>
          Left<span>000 kcal</span>
        </p>
        <p>
          Consumed<span>000 kcal</span>
        </p>

        <p>
          Daily rate<span>{Math.round(kcal)}</span>
        </p>

        <p>
          n% of normal<span>000 kcal</span>
        </p>
      </div>
      <h2>Food not recommended</h2>

      <ul>
        {newArrNotAllowedProducts &&
          newArrNotAllowedProducts.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
};

export default RightSideBar;
