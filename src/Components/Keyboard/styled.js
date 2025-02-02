import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 85%;
  background-color: #d9d9d9;
  height: 70%;
  border-radius: 4px;
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  input {
    margin-right: 2%;
    border: none;
    width: 85%;
    height: 80%;
    margin-top: 2%;
    border-radius: 2px;
    border-color: #fff;
  }
  input:focus {
    outline: none;
    border: none;
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
