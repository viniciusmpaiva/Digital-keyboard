import styled from 'styled-components';

export const SuggestedWordsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 17%;
  margin-bottom: 1%;
`;

export const SuggestedWordButton = styled.button`
  font-size: 180%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  width: 23%;
  height: 100%;
  border: none;
  border-radius: 2px;
  margin-left: 1%;

  transition:
    all 300ms,
    border 50ms;
  cursor: pointer;

  &:hover {
    filter: brightness(75%);
  }

  &.pressed {
    background-color: #a9a9a9;
    font-size: 130%;
    border: 2px solid black;
  }
`;
