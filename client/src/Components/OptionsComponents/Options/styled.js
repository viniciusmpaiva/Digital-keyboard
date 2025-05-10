import styled from 'styled-components';

export const OptionsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const OptionsPopUp = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 85%;
  height: 85%;
`;
