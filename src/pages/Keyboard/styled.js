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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .delete {
    height: 28px;
    width: 90px;
    margin-left: 20px;
    border-radius: 3px;
    border-color: #fff;
    text-align: center;
    border: none;
    transition: all 300ms;
  }
  .enter {
    margin-top: 5px;
    height: 90px;
    width: 70px;
    font-size: 25px;
    border-color: #fff;
    transition: 300ms;
    border-radius: 3px;
    border: none;
  }
  .enter:hover {
    filter: brightness(75%);
  }

  .delete:hover {
    filter: brightness(75%);
  }
`;

export const KeyboardContainer = styled.div`
  background-color: #eeeded;
  max-width: 890px;
  height: 190px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  button {
    width: 70px;
    height: 40px;
    margin-top: 7px;
    margin-left: 17px;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    transition: all 300ms;
  }
  button:hover {
    filter: brightness(75%);
  }
`;

export const KeyboardLine = styled.div`
  .line1 {
    margin-left: 17px;
    margin-top: 15px;
  }
  .line1 .line2 .line3 .pressed .notPressed .space {
    width: 70px;
    max-width: 70px;
    height: 40px;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    transition: all 300ms;
  }
  .line2 {
    margin-left: 17px;
    margin-top: 15px;
  }

  .line3 {
    margin-left: 17px;
    margin-top: 15px;
  }
  button:hover {
    filter: brightness(75%);
  }

  .pressed {
    background-color: #bfbfbf;
  }

  .notPressed {
    font-size: 23px;
    align-items: center;
    justify-content: center;
  }

  .space {
    font-size: 23px;
    justify-content: center;
    align-content: center;
  }
`;
