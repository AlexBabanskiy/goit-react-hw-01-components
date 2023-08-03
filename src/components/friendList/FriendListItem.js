import { ListItem } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendListItem = function ({ data }) {
  return data.map(({ avatar, name, isOnline, id }) => {
    const online = isOnline ? (
      <span className="status online">{isOnline}</span>
    ) : (
      <span className="status">{isOnline}</span>
    );
    return (
      <ListItem key={id} className="item">
        {online}
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </ListItem>
    );
  });
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
