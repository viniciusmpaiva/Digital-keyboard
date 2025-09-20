import styled from 'styled-components';

export const OptionsButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1%;
  border-radius: 8px;
  width: 98%;
  height: 97%;
  button {
    background-color: #d9d9d9;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 180%;
    transition: background-color 0.3s;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    &:hover {
      background-color: #b3b3b3;
    }
  }
`;
