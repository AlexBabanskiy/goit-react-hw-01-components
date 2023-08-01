export const FriendListItem = function ({ friends }) {
  const allFriends = friends.friends;
  console.log(allFriends);
  return (
    <section class="friends">
      <ul>
        {allFriends.map(friend => (
          <li key={friend.id} class="item">
            <span class="status">{friend.isOnline}</span>
            <img
              class="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p class="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
