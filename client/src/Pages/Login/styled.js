import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 30%;
  background-color: #3c3737;
  border-radius: 4px;
  box-shadow: 0 2% 10% rgba(0, 0, 0, 0.1);
  gap: 5%;
  color: #fff;

  button {
    width: 30%;
    height: 10%;
    border-radius: 4px;
    border: none;
    background-color: #fff;
    color: #000;
    font-size: 100%;
    cursor: pointer;
    :hover {
      filter: brightness(75%);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  gap: 5%;
  input {
    width: 80%;
    height: 50%;
    border-radius: 4px;
    border: none;
    padding-left: 2%;
    font-size: 100%;
    color: #000;
    background-color: #fff;
    :focus {
      outline: none;
      border: none;
    }
  }
  label {
    font-size: 120%;
    color: #fff;
  }
`;
