import styled from 'styled-components';

export const LineContainer = styled.div`
  align-items: center;
  justify-content: center;

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
