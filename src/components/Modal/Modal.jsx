import { useSelector } from "react-redux";

const Modal = () => {

  const dailyKcal = useSelector(state => state?.dailyRate?.dailyRate);
  console.log(dailyKcal)

  return (
    <div className="modal">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_13001_75)">
          <path
            d="M15.8333 5.3415L14.6583 4.1665L9.99996 8.82484L5.34163 4.1665L4.16663 5.3415L8.82496 9.99984L4.16663 14.6582L5.34163 15.8332L9.99996 11.1748L14.6583 15.8332L15.8333 14.6582L11.175 9.99984L15.8333 5.3415Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_13001_75">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h2> Your recommended daily calorie intake is</h2>
      <p>
        <span className="modalKcal">{dailyKcal}</span> kcal
      </p>
      <p>Foods you should not eat</p>
      <ul>
        {/* {DailyRateResponse.notAllowedProducts.map(item => {
          <li className="modal.item">{item}</li>;
        })} */}
      </ul>
      <button>Start losing weight</button>
    </div>
  );
};

export default Modal