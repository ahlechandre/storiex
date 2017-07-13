import React from 'react';
import PropTypes from 'prop-types';

const Profile = props => (
  <h4>{props.name}</h4>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
