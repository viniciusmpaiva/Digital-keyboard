import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;
`;

export const RegisterTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: #708090;
  font-size: 300%;
  text-align: center;
`;

export const RegisterInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  height: 20%;
  gap: 5%;
  padding: 0 10%;

  input {
    width: 80%;
    height: 50%;
    border-radius: 4px;
    border: none;
    padding-left: 2%;
    font-size: 100%;
    color: #000;
    background-color: #fff;
    align-self: center;
    :focus {
      outline: none;
      border: none;
    }
  }
  label {
    font-family: 'Roboto', sans-serif;
    font-size: 120%;
    color: #fff;
    text-align: left;
    align-self: center;
    width: 80%;
  }
`;
