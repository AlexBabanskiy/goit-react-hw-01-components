import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled';
export const FriendList = function ({ props }) {
  //   console.log(friends);
  return (
    <List className="friend-list">
      <FriendListItem data={props} />
    </List>
  );
};
