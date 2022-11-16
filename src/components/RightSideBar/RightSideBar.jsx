import { useState, useEffect } from 'react';
import s from './RegisterSideBar.module.css';
import { getDiaryByDate } from '../../js/backendAPI';
import { toBackendDateString } from '../../js/utils';
import { current } from 'redux/auth/auth-operations';

export default function RightSideBar({
  userParams,
  userProducts,
  date,
  diaryProducts,
}) {
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      if (userParams && userProducts) {
        //якщо ми отримали параметри користувача як пропси - запишемо в стейт
        setUserData({
          parameters: userParams,
          notAllowedProducts: userProducts,
        });
        return; //і вийдемо
      }
      const currentUser = await current(); //а якщо не отримали - запитаємо ці параметри з бекенда
      setUserData(currentUser); //і теж запишемо в стейт
    }
    fetchUserData();
  }, [userParams, userProducts]);

  useEffect(() => {
    async function fetchDiary() {
      if (diaryProducts) {
        setProducts(diaryProducts);
      } else if (date) {
        getDiaryByDate(date).then(setProducts);
      }
    }
    fetchDiary();
  }, [date, diaryProducts]);

  const dailyRate = () => {
    if (userData?.parameters?.calories) {
      return userData.parameters.calories;
    }
    return false;
  };

  const totalCaloriesOfDay = () => {
    if (products) {
      return products
        .map(product => product.calories)
        .reduce((previousValue, number) => {
          return previousValue + number;
        }, 0);
    }
  };

  const dailyNorm = dailyRate(); //Добова норма
  const consumed = totalCaloriesOfDay(); //Спожито
  const percentOfNormal = (consumed / dailyNorm) * 100; //n% від норми
  const left = dailyNorm - consumed; //Залишилось

  return (
    <div className={s.container}>
      <div>
        <h1 className={s.header}>
          Звіт на <span>{toBackendDateString(date)}</span>
        </h1>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.text}>Залишилось</p>
            <span className={s.text}>
              {left && userData?.notAllowedProducts?.length
                ? `${left.toFixed(0)} ккал`
                : '0 ккал'}
            </span>
          </li>
          <li className={s.item}>
            <p className={s.text}>Спожито</p>
            <span className={s.text}>
              {consumed && userData?.notAllowedProducts?.length
                ? `${consumed.toFixed(0)} ккал`
                : '0 ккал'}
            </span>
          </li>
          <li className={s.item}>
            <p className={s.text}>Добова норма</p>
            <span className={s.text}>
              {dailyNorm && userData?.notAllowedProducts?.length
                ? `${dailyNorm} ккал`
                : '0 ккал'}
            </span>
          </li>
          <li className={s.item}>
            <p className={s.last__text}>% від норми</p>
            <span className={s.text}>
              {percentOfNormal && userData?.notAllowedProducts?.length
                ? `${percentOfNormal.toFixed(0)} %`
                : '0 %'}
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={s.header}>Не рекомендована їжа</h2>
        <ul>
          {userData?.notAllowedProducts?.length ? (
            userData.notAllowedProducts.slice(0, 9).map(({ _id, title }) => (
              <li key={_id} className={s.text_item}>
                <span>{title.ua}</span>
              </li>
            ))
          ) : (
            <p className={s.text}>Тут відображатиметься ваша дієта</p>
          )}
        </ul>
      </div>
    </div>
  );
}
