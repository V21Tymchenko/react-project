import s from './RightSideBar.module.css';
const RightSideBar = () => {
  return (
    <>
      <h2 className={s.titleBar}>Summary for 06/20/2020</h2>
      <div className={s.containerKcal}>
        <p className={s.textPosition}>
          Left<span>000 kcal</span>
        </p>
        <p className={s.textPosition}>
          Consumed<span>000 kcal</span>
        </p>
        <p className={s.textPosition}>
          Daily rate<span>000 kcal</span>
        </p>
        <p className={s.textPosition}>
          n% of normal<span>000 kcal</span>
        </p>
      </div>
      <h2>Food not recommended</h2>

      <ul>{/* map(item => {<li>item</li>}) */}</ul>
    </>
  );
};

export default RightSideBar;
