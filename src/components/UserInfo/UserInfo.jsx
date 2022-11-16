import s from './UserInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { stateAuthToken, stateAuthUserName } from 'redux/auth/auth-selectors';

const UserInfo = () => {
  const dispatch = useDispatch();
  const userName = useSelector(stateAuthUserName);
  const token = useSelector(stateAuthToken);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={s.wrapper}>
      {token && <span className={s.user}>{userName}</span>}
      <button className={s.exitBtn} type="button" onClick={onLogout}>
        Exit
      </button>
    </div>
  );
};
export default UserInfo;
