import styled from 'styled-components';

export const NumberOfBoxesButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 40%;
  button {
    width: 49%;
    height: 90%;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 3px;
    border: none;
    transition:
      all 300ms,
      border 50ms;
    &:hover {
      filter: brightness(75%);
    }
    background-color: #d9d9d9;
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
  }
`;
