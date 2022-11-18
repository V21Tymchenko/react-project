import { useSelector } from 'react-redux';
import {
  // dailyRateSel,
  dateSel,
  kcalConsumedSel,
  percentsOfDailyRateSel,
  kcalLeftSel,
} from 'redux/diary/diary-selectors';
import s from './RightSideBar.module.css';

const RightSideBar = () => {
  const date = useSelector(dateSel);
  const kcalLeft = useSelector(kcalLeftSel);
  const kcalConsumed = useSelector(kcalConsumedSel);
  // const dailyRate = useSelector(dailyRateSel);
  const percentsOfDailyRate = useSelector(percentsOfDailyRateSel);

  const kcal = useSelector(state => state.user.userData.dailyRate);

  // const kcal = useSelector(state => state.dailyRate.dailyRate);
  // const arrNotAllowedProducts = useSelector(
  //   state => state?.dailyRate?.notAllowedProducts
  // );
  // const newArrNotAllowedProducts = [...arrNotAllowedProducts].slice(0, 5);

  const notAllowedProd = useSelector(
    state => state?.dailyRate?.notAllowedProducts
  );
  const newNotAllowedProd = [...notAllowedProd].slice(0, 5);
  console.log(newNotAllowedProd);
  return (
    <div className={s.sidebar}>
      <div>
        <h2 className={s.titleBar}>Summary for {date}</h2>
        <div className={s.containerKcal}>
          <p className={s.textPosition}>
            Left<span>{kcalLeft} kcal</span>
          </p>
          <p className={s.textPosition}>
            Consumed<span>{kcalConsumed} kcal</span>
          </p>
          <p className={s.textPosition}>
            Daily rate<span>{kcal} kcal</span>
          </p>
          <p className={s.textPosition}>
            % of normal<span>{percentsOfDailyRate} %</span>
          </p>
        </div>
      </div>
      <div>
        <h2 className={s.titleBar}>Food not recommended</h2>
        <ul>
          {newNotAllowedProd.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
