import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;
`;

export const FormTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: #708090;
  font-size: 300%;
  text-align: center;
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  height: 20%;
  gap: 5%;
  padding: 0 10%;
  margin-bottom: 1rem;

  input {
    width: 80%;
    height: 50%;
    border-radius: 4px;
    border: ${(props) => (props.hasError ? '2px solid #ff4444' : 'none')};
    padding-left: 2%;
    font-size: 100%;
    color: #000;
    background-color: #fff;
    align-self: center;

    :focus {
      outline: none;
      border: ${(props) =>
        props.hasError ? '2px solid #ff4444' : '2px solid #708090'};
    }
  }

  label {
    font-family: 'Roboto', sans-serif;
    font-size: 120%;
    color: #fff;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  .error-message {
    font-family: 'Roboto', sans-serif;
    font-size: 90%;
    color: #ff4444;
    text-align: left;
    margin-top: 0.25rem;
    align-self: center;
    width: 80%;
  }
`;
