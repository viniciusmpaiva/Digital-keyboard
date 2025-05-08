import styled from 'styled-components';

export const ChangePositionButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-left: 1%;
  button {
    width: 100%;
    height: 47%;
    background-color: #d9d9d9;
    border: none;
    /* padding: 10px; */
    /* margin: 10px; */
    cursor: pointer;
    border-radius: 3px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 20px;
    transition:
      all 300ms,
      border 50ms;
    &:hover {
      filter: brightness(75%);
    }
  }
  .pressed {
    background-color: #a9a9a9;
    font-size: 22px;
    border: 2px solid black;
  }
`;
