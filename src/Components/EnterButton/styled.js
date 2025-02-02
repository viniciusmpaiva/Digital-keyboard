import styled from 'styled-components';

export const EnterButtonStyle = styled.button`
  margin-top: 5%;
  width: 100%;
  height: 65%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    filter: brightness(75%);
  }
  font-size: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
