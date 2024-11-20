import styled from 'styled-components';

export const PresetsContainer = styled.div`
  background-color: #f2f2f2;
  width: 150px;
  border-radius: 5px;
  left: 0px;
  position: absolute;
  button {
    height: 50px;
    width: 140px;
    background-color: #d9d9d9;
    border: none;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
    transition:
      all 300ms,
      border 50ms;
    cursor: pointer;
  }
  .newPresetButton {
    margin-top: 10px;
    font-size: 20px;
  }

  :hover {
    filter: brightness(75%);
  }

  .clearButton {
    background-color: #ff6666;
    color: white;
    font-size: 20px;
  }
  display: flex;
  flex-direction: column;
`;
