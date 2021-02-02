import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

// import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  //  const avatar = defaultAvatar;
  return (
    <div>
      {/* <img src={avatar} alt="" width="32" /> */}
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Sign out
      </button>
    </div>
  );
}
