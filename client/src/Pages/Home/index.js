import React from 'react';
import { HomePageContainer, TitleContainer } from './styled';
import LoginComponents from '../../Components/LoginComponents/index';

export default function Home() {
  return (
    <HomePageContainer>
      <TitleContainer>
        <h1>NeuroKeys</h1>
        <LoginComponents />
      </TitleContainer>
    </HomePageContainer>
  );
}
