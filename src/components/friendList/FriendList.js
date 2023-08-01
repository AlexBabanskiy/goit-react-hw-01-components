import { FriendListItem } from './FriendListItem';

export const FriendList = function (friends) {
  //   console.log(friends);
  return (
    <ul class="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};
