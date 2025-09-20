import styled from 'styled-components';

export const PresetButtonContainer = styled.button`
  font-size: 150%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  width: 20rem;
  height: 8rem;
  border: none;
  border-radius: 2px;
  margin: 1%;

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
