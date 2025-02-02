import styled from 'styled-components';

export const DeleteButtonStyle = styled.button`
  width: 100%;
  height: 80%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    filter: brightness(75%);
  }
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;
