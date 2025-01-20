import styled from 'styled-components';

export const Container = styled.div`
  grid-row: 2;
  width: 85%;
  background-color: #d9d9d9;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr auto 1fr;
  border-radius: 4px;
`;
export const CenterItems = styled.div`
  grid-column: 1 / span 3;
  grid-row: 3;
  place-items: center;
`;

export const TextInputContainer = styled.div`
  grid-column: 1 / span 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  grid-row: 1 / span 2;
  input {
    margin-right: 2%;
    border: none;
    width: 85%;
    height: 20%;
    margin-top: 2%;
    border-radius: 2px;
    border-color: #fff;
  }
  input:focus {
    outline: none;
    border: none;
  }
`;

export const KeysContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  place-items: center;
  height: 100%;
  width: 98%;
  display: grid;

  grid-template-columns: repeat(${(props) => props.numberOfBoxes}, 1fr);
`;

export const DisplayKeyLineContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;

  align-items: center;
  height: 100%;
  width: 100%;
  /* grid-row: 1; */
  /* height: 80px; */
  /* width: 500px; */
  /* margin-bottom: 1px; */
  /* position: absolute; */
  /* border-radius: 3px; */
  /* margin-top: 30px; */
`;

export const DisplayKeysContainer = styled.div`
  grid-row: 2;
  grid-column: 1 / span 3;
  width: 85%;
  margin-top: 6%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;
