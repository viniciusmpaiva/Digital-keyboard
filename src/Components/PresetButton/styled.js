import styled from 'styled-components';

export const PresetButtonContainer = styled.div`
  margin-top: 3%;
  display: flex;
  width: 90%;
  flex-direction: column;
  height: 100%;
`;

export const PresetNameButton = styled.button`
  width: 100%;
  height: 50%;
  font-size: 150%;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
  }
  border: none;
`;

export const PresetDeleteButton = styled.button`
  width: 50%;
  height: 100%;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
  }
  border: none;
  background-color: #ff6666;
  font-size: 150%;
  color: white;
`;

export const PresetRenameButton = styled.button`
  width: 50%;
  height: 100%;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
  }
  border: none;
  font-size: 150%;
  background-color: #ffcc66;
`;

export const PresetOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
`;
