import styled from 'styled-components';

export const OptionsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 1%;

  button {
    width: 100%;
    height: 47%;
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
