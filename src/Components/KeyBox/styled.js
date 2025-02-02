import styled from 'styled-components';

export const KeyBoxContainer = styled.div`
  display: grid;
  background-color: #d9d9d9;
  grid-template-columns: repeat(2, 1fr);
  grid-column: ${(props) => props.indexBox + 1};
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  justify-items: center;
  align-items: center;
  border-radius: 3px;
  /* margin-left: 7px;
  margin-right: 5px; */
  transition:
    all 300ms,
    border 50ms;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
  }
  &.target {
    border: 2px solid #000;
    background-color: #999;
  }
`;
