import styled from 'styled-components';

export const SpecialKeyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-right: 15px;

  button {
    width: 70px;
    height: 40px;
    margin-top: 7px;
    margin-left: 17px;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    transition: all 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
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
