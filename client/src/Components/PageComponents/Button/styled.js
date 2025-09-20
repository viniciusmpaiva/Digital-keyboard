import styled from 'styled-components';

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['empty'].includes(prop),
})`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) =>
    props.empty ? 'transparent' : props.color || 'blue'};
  color: ${(props) => (props.empty ? props.color || 'blue' : 'white')};
  border: 2px solid ${(props) => props.color || 'blue'};
  border-radius: 4px;
  padding: 10px 20px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  outline: none;
  border-radius: 7px;

  &:hover {
    background-color: ${(props) =>
      props.empty
        ? `${props.color || 'blue'}20`
        : `${props.color || 'blue'}cc`};
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => `${props.color || 'blue'}40`};
  }
`;
