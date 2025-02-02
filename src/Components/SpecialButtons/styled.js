import styled from 'styled-components';

export const SpecialButtonsContainer = styled.div`
  margin-right: 1%;
  margin-top: 2%;
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* .change {
    position: absolute;
    margin-left: -770px;
    margin-top: 90px;
    height: 35px;
    width: 90px;
    border-color: #fff;
    transition: 300ms;
    border-radius: 3px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px; */

  &.pressed {
    background-color: #bfbfbf;
  }
  /* } */
  .change:hover {
    filter: brightness(75%);
  }
`;
