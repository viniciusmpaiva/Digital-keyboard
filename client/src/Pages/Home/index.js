import React from 'react';
import { HomePageContainer, TitleContainer } from './styled';
import HomeComponent from '../../Components/PageComponents/HomeComponent/index';

export default function Home() {
  return (
    <HomePageContainer>
      <TitleContainer>
        <h1>NeuroKeys</h1>
        <HomeComponent />
      </TitleContainer>
    </HomePageContainer>
  );
}
