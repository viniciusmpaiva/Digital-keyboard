import styled from 'styled-components';

export const SpecialKeyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
  float: right;
  position: absolute;
  width: 400px;
  margin-left: 510px;
  margin-top: 4%;
  button {
    width: 90px;
    height: 60px;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    transition: all 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    margin-left: 5px;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(75%);
  }

  .pressed {
    background-color: #bfbfbf;
    font-size: 25px;
  }

  .notPressed,
  .space {
    font-size: 23px;
    align-items: center;
    justify-content: center;
  }
`;
