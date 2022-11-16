import { useSelector } from 'react-redux';
import s from './UserInfo.module.css';

const UserInfo = () => {
  const userName = useSelector(state => state.auth.user.name);
  return (
    <div className={s.wrapper}>
      <span className={s.user}>{userName}</span>
      <button className={s.exitBtn} type="button">
        Exit
      </button>
    </div>
  );
};
export default UserInfo;
