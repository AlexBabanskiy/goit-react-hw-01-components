import { FriendListItem } from '../friendlistitem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = function ({ props }) {
  return (
    <List className="friend-list">
      {props.map(prop => {
        return <FriendListItem items={prop} />;
      })}
    </List>
  );
};
