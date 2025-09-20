import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  height: 5%;
  padding: 1rem;
  text-align: center;
`;

export const HeaderOption = styled.div`
  display: inline-block;
  margin: 0 1rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
