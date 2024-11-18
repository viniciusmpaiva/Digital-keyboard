import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #d9d9d9;
  width: 300px;
  height: 50px;
  border-radius: 3px;
  margin-top: 50px;
  margin-left: 160px;
  flex-direction: column;
  .saveButton {
    position: absolute;
    margin-left: 1340px;
    margin-top: 160px;
    width: 150px;
    height: 50px;
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

  .closeButton {
    position: absolute;
    margin-left: 990px;
    margin-top: 160px;
    width: 150px;
    height: 50px;
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
