import styled from 'styled-components';

export const KeyButton = styled.button`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  font-size: ${(props) => props.fontSize || '100'}%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  margin-left: ${(props) => props.marginLeft};
  background-color: ${(props) => props.backgroundColor || '#fff'};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);

  transition:
    background-color 200ms ease-in-out,
    box-shadow 200ms ease-in-out,
    transform 100ms ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.hover ? '#b3b3b3' : props.backgroundColor};
  }

  &:active {
    // Ao clicar, a sombra diminui e a tecla "afunda" um pouco
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }

  &.dragging {
    opacity: 1;
    background-color: #999;
    border: 1px dashed #999;
    cursor: grabbing;
  }

  /* &.target {
    border: 2px solid #000;
    background-color: #999;
  } */
  &.disabled {
    pointer-events: none;
  }
`;
