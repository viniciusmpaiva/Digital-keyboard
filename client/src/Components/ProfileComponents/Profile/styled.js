import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;

  font-family: 'Roboto', sans-serif;
  font-size: 150%;
  color: #708090;
`;

export const ProfileIcon = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #708090;
  background-image: url('/default-pfp-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 3px solid #708090;
  display: flex;
  padding: 0.5rem; /* This creates the margin around the image */
  box-sizing: border-box;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: #5a6c7a;
    box-shadow: 0 8px 20px rgba(112, 128, 144, 0.3);
  }
`;
