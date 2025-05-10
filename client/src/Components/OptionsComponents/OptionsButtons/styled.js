import styled from 'styled-components';

export const OptionsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  height: 40%;
  margin-left: 1%;

  button {
    width: 49%;
    height: 90%;
    background-color: #d9d9d9;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 30px;
    transition:
      all 300ms,
      border 50ms;
    &:hover {
      filter: brightness(75%);
    }
  }
`;
