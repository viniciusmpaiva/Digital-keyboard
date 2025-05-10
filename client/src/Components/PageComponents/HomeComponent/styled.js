import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 10%;
  gap: 10%;
  margin-bottom: 5%;
`;

export const LoginComponentsButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 150%;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
  }
  border: none;
`;
