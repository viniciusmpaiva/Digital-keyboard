import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  max-width: 900px;
  height: 350px;
  background-color: #d9d9d9;
  display: grid;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  margin-bottom: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ReadInputContainer = styled.div`
  display: flex;
  align-items: baseline;
  height: 50px;
  margin-bottom: 40px;

  input {
    border: none;
    margin-top: 20px;
    margin-left: 1px;
    width: 770px;
    height: 28px;
    border-radius: 2px;
    border-color: #fff;
  }
  input:focus {
    outline: none;
    border: none;
  }
`;

export const KeyboardContainer = styled.div`
  background-color: #fff;
  max-width: 890px;
  height: 190px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const LastLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 7px;
`;

export const DisplayKeyLineContainer = styled.div`
  background-color: #fff;
  height: 80px;
  width: 500px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  position: absolute;
  /* top: 70px; */
  /* left: 5px; */
  /* margin-left: 55px; */
  /* margin-top : 100px; */
  border-radius: 3px;
  margin-top: 30px;
`;

export const DisplayKeysContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  justify-content: flex-start;
  align-items: center;
`;
