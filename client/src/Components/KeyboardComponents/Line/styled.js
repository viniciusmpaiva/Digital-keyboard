import styled from 'styled-components';

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

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
