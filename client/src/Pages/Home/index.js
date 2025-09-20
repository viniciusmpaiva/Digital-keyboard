import React from 'react';
import { HomeButtonsContainer } from './styled';
import Header from '../../Components/PageComponents/Header';
import Button from '../../Components/PageComponents/Button';
import history from '../../services/history';
import PageLayout from '../../Components/PageComponents/PageLayout';
import PageTitle from '../../Components/PageComponents/PageTitle';

export default function Home() {
  const handleLoginClick = () => {
    history.push('/login');
  };

  const handleRegisterClick = () => {
    history.push('/register');
  };

  return (
    <PageLayout>
      <Header />
      <PageTitle>EyeType</PageTitle>
      <div style={{ width: '60%', marginBottom: '2%' }}>
        <p>
          EyeType is an accessible digital keyboard compatible with a wide range
          of eye-tracking technologies. Its fully customizable layout allows you
          to create a keyboard that perfectly fits your needs for a seamless
          typing experience.
        </p>
      </div>
      <HomeButtonsContainer>
        <Button
          color="#708090"
          content="Register"
          width="70%"
          height="80%"
          onclick={handleRegisterClick}
        />
        <Button
          empty
          color="#708090"
          content="Login"
          width="70%"
          height="80%"
          onclick={handleLoginClick}
        />
      </HomeButtonsContainer>
    </PageLayout>
  );
}
