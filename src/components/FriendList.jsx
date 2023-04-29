const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li class="item" key={id}>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
