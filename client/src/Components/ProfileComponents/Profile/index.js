import React from 'react';

import { ProfileIcon, ProfileContainer } from './styled';

export default function Profile({ profileName, onClick }) {
  return (
    <ProfileContainer>
      <ProfileIcon onClick={onClick} />
      {profileName}
    </ProfileContainer>
  );
}
