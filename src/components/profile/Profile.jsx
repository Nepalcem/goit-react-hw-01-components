import {
  StatListItem,
  StatList,
  ProfileContainer,
  DescriptionContainer,
} from './Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </DescriptionContainer>

      <StatList>
        <StatListItem>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </StatListItem>
        <StatListItem>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </StatListItem>
        <StatListItem>
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
        </StatListItem>
      </StatList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};

export default Profile;
