import styled from 'styled-components';

export const KeyButton = styled.button`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  font-size: ${(props) => props.fontSize};
  margin-left: ${(props) => props.marginleft};
  background-color: ${(props) => props.backgroundcolor || '#fff'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  &.disabled {
    pointer-events: none;
  }
`;
