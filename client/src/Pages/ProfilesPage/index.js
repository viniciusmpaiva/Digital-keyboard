import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageLayout from '../../Components/PageComponents/PageLayout';
import PageTitle from '../../Components/PageComponents/PageTitle';
import Profile from '../../Components/ProfileComponents/Profile';
import history from '../../services/history';
import * as actions from '../../store/Modules/profiles/actions';

import { ProfilesContainer } from './styled';

export default function ProfilesPage() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.profiles);

  useEffect(() => {
    dispatch(actions.getProfilesRequest());
  }, [dispatch]);

  const handleProfileSelect = (profile) => {
    dispatch(actions.selectProfile(profile));
    history.push('/keyboard');
  };

  const handleNewProfile = () => {
    const profileName = `profile ${profiles.length + 1}`;
    const profileData = {
      name: profileName,
    };
    dispatch(actions.postProfilesRequest(profileData));
  };

  return (
    <PageLayout>
      <PageTitle>Profiles</PageTitle>
      <ProfilesContainer>
        {profiles.map((profile) => (
          <Profile
            key={profile.id}
            profileName={profile.name}
            onClick={() => handleProfileSelect(profile)}
          />
        ))}
        <Profile profileName="New Profile" onClick={handleNewProfile} />
      </ProfilesContainer>
    </PageLayout>
  );
}
