import styled from 'styled-components';

export const NumberOfBoxesButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  flex-direction: column;
  margin-right: 100px;
  button {
    width: 200px;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 35px;
    margin-top: 5px;
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
