import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;

  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: #fff;
    font-size: 100%;
    text-align: center;
  }
`;

export const HomeButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 25%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
