import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile';
import Button from '../../../components/Button';

const ProfileListContainer = props => (
  <section>
    {props.profiles.map(profile => (
      <div>
        <Profile key={profile.key} {...profile} />
        <Button text="Edit" />
      </div>
    ))}
  </section>
);

ProfileListContainer.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfileListContainer;
