import styled from 'styled-components';

export const SpecialButtonsContainer = styled.div`
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
