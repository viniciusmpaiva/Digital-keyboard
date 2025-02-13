import styled from 'styled-components';

export const PresetsContainer = styled.div`
  margin-top: 10%;
  display: flex;
  width: 90%;
  height: 43%;
  flex-direction: row;
  button {
    height: 100%;
    width: 100%;
    background-color: #d9d9d9;
    border: none;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    transition:
      all 300ms,
      border 50ms;
    cursor: pointer;
  }
  .newPresetButton {
    margin-bottom: 3%;
    font-size: 20px;
  }

  button:hover {
    filter: brightness(75%);
  }

  .clearButton {
    background-color: #ff6666;
    color: white;
    font-size: 20px;
  }
  display: flex;
`;

export const ColumnItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-bottom: 5%;
`;
