import { useSelector } from 'react-redux';

const UserInfo = () => {
  const userName = useSelector(state => state.auth.user.username);
  return (
    <div>
      <span>{userName}</span>
      <button type="button">Exit</button>
    </div>
  );
};
export default UserInfo;
