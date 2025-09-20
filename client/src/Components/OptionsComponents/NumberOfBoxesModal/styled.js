import styled from 'styled-components';

export const NumberOfBoxesPopUpButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1%;
  border-radius: 8px;
  width: 98%;
  height: 97%;

  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 150%;
    height: 20%;
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background-color: #d9d9d9;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 180%;

    transition: background-color 0.3s;

    &:hover {
      background-color: #b3b3b3;
    }
  }
`;
