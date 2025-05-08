import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #d9d9d9;
  height: 75%;
  border-radius: 4px;
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 10%;
  margin-top: 1%;
  input {
    margin-right: 1%;
    border: none;
    width: 86%;
    height: 95%;
    border-radius: 2px;
    border-color: #fff;
  }

  input:focus {
    outline: none;
    border: none;
  }

  button {
    width: 10.5%;
    height: 100%;
    border: none;
    border-radius: 2px;
    transition:
      all 300ms,
      border 50ms;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(75%);
  }
`;

export const CenterItems = styled.div`
  display: flex;
  height: 85%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const KeysContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 98%;
`;

export const DisplayKeysContainer = styled.div`
  width: 98%;
  border-radius: 4px;
  height: 80%;
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;
