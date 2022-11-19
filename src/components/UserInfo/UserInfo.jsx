import s from './UserInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { stateAuthUserName } from 'redux/auth/user/user-selectors';
import { stateAuthToken } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

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
      {token && (
        <button className={s.exitBtn} type="button" onClick={onLogout}>
          Exit
        </button>
      )}
    </div>
  );
};
export default UserInfo;
