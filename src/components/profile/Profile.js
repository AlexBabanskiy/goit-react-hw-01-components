import PropTypes from 'prop-types';
import {
  ListProfile,
  ImgProfile,
  NameProfile,
  UlProfile,
  LiProfile,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ListProfile className="profile">
      <div className="description">
        <ImgProfile src={avatar} alt="User avatar" className="avatar" />
        <NameProfile className="name">{username}</NameProfile>
        <NameProfile className="tag">@{tag}</NameProfile>
        <NameProfile className="location">{location}</NameProfile>
      </div>

      <UlProfile className="stats">
        <LiProfile>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </LiProfile>
        <LiProfile>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </LiProfile>
        <LiProfile>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </LiProfile>
      </UlProfile>
    </ListProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
