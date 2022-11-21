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

  const kcal = useSelector(state => state.user?.userData?.dailyRate);

  // const kcal = useSelector(state => state.dailyRate.dailyRate);
  const arrNotAllowedProducts = useSelector(state =>
    state?.user?.userData?.notAllowedProducts?.slice(0, 5)
  );
  // const newArrNotAllowedProducts = [...arrNotAllowedProducts].slice(0, 5);

  // const notAllowedProd = useSelector(
  //   state => state?.user?.userData?.notAllowedProducts
  // );

  // const newArrey = [...notAllowedProd];

  // function arrayRandElement(arr) {
  //   let newRand = [];
  //   for (let i = 0; i < 5; i += 1) {
  //     var rand = Math.floor(Math.random() * arr?.length);
  //     newRand.push(arr[rand]);
  //   }
  //   return newRand;
  // }
  // const randomNotAllowed = arrayRandElement(newArrey);

  return (
    <div className={s.sidebar}>
      <div className={s.data}>
        <h2 className={s.titleBar}>Summary for {date}</h2>
        <div className={s.containerKcal}>
          <p className={s.textPosition}>
            Left
            <span>{kcalLeft ? `${kcalLeft} kcal` : `0 kcal`}</span>
          </p>
          <p className={s.textPosition}>
            Consumed
            <span>{kcalConsumed ? `${kcalConsumed} kcal` : `0 kcal`}</span>
          </p>
          <p className={s.textPosition}>
            Daily rate
            <span>{kcal ? `${Math.round(kcal)} kcal` : `0 kcal`}</span>
          </p>
          <p className={s.textPosition}>
            % of normal
            <span>
              {percentsOfDailyRate ? `${percentsOfDailyRate} %` : `0 %`}
            </span>
          </p>
        </div>
      </div>
      <div className={s.notRecomendet}>
        <h2 className={s.titleBar}>Food not recommended</h2>
        {/* 
        <ul className={s.items}>
          {notAllowedProd.map(item => {
            return (
              <li className={s.textPosition + ' ' + s.item} key={item}>
                {item}
              </li>
            );
          })}
        </ul> */}

        {arrNotAllowedProducts?.length > 1 ? (
          <ul>
            {arrNotAllowedProducts?.map(item => {
              return (
                <li key={item} className={s.productItem}>
                  {item}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={s.yourDiet}>Your diet will be displayed here</p>
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
