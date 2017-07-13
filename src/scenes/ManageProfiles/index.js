import React, { Component } from 'react';
import ProfileListContainer from './ProfileListContainer';
import Button from '../../components/Button';

class ManageProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
    this.onSave = this.onSave.bind(this);
  }

  onSave(event) {
    if (this.state.saved === true) {
      event.preventDefault();
      return;
    }

    this.setState(prevState => ({
      saved: !prevState.saved,
    }));
  }

  getProfilesData() {
    return [
      {
        name: 'Profile 1',
        key: 1,
      },
      {
        name: 'Profile 2',
        key: 2,
      },
    ];
  }

  render() {
    return (
      <section>
        <h1>Manage Profiles</h1>

        <ProfileListContainer profiles={this.getProfilesData()} />

        <div>
          <Button text={this.state.saved ? 'Saved' : 'Save'} onClick={this.onSave} />
          <Button text="Cancel" isLink to="/" />
        </div>
      </section>
    );
  }
}

export default ManageProfiles;
