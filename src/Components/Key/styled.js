import styled from 'styled-components';

export const KeyButton = styled.button`
  width: 70px;
  height: 40px;
  margin-top: 7px;
  margin-left: 17px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  transition:
    all 300ms,
    border 50ms;
  :hover {
    filter: brightness(75%);
  }
  &.dragging {
    opacity: 1;
    background-color: #999;
    border: 1px dashed #999;
    cursor: grabbing;
  }

  &.target {
    border: 2px solid #000;
    background-color: #999;
  }
`;
