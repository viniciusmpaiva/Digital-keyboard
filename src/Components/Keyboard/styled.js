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

  input {
    border: none;
    margin-top: 20px;
    margin-left: 20px;
    width: 750px;
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
  background-color: #eeeded;
  max-width: 890px;
  height: 190px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const LastLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 7px;
`;
