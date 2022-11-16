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
    <div>
      {token && <span>{userName}</span>}
      <button type="button" onClick={onLogout}>
        Exit
      </button>
    </div>
  );
};
export default UserInfo;
