import React from 'react';

import { ProfileIcon, ProfileContainer } from './styled';

export default function Profile({ profileName }) {
  return (
    <ProfileContainer>
      <ProfileIcon />
      {profileName}
    </ProfileContainer>
  );
}
