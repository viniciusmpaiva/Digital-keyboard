import styled from 'styled-components';

export const SpecialKeyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 98%;
  height: 40%;
  margin-top: 0.5%;

  .space {
    width: 50%;
    height: 90%;
    background-color: #fff;
  }

  .clear {
    margin-left: 0.5%;
    width: 16.5%;
    height: 90%;
  }

  .upper {
    margin-left: 0.5%;
    width: 16%;
    height: 90%;
  }

  .speak {
    margin-left: 0.5%;
    width: 16%;
    height: 90%;
  }

  button {
    font-size: 150%;
    background-color: #fff;
    border: none;
    transition: all 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .pressed {
    background-color: rgb(185, 185, 185);
    color: white;
  }

  button:hover {
    filter: brightness(75%);
  }
`;
