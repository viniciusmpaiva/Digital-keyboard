import React from 'react';

import PageLayout from '../../Components/PageComponents/PageLayout';
import PageTitle from '../../Components/PageComponents/PageTitle';
import Profile from '../../Components/ProfileComponents/Profile';

export default function ProfilesPage() {
  return (
    <PageLayout>
      <PageTitle>Profiles</PageTitle>
      <Profile profileName="Vinicius Paiva" />
    </PageLayout>
  );
}
