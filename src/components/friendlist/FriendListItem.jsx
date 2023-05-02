import { FriendIsOnlineStyled } from './FriendIsOnline.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <FriendIsOnlineStyled isOn={isOnline}></FriendIsOnlineStyled>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
