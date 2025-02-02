import styled from 'styled-components';

export const NumberOfBoxesButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  button {
    width: 100%;
    height: 47%;
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
