import styled from 'styled-components';

export const PopUpOptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 20%;
  margin-bottom: 1%;
`;

export const PopUpOptionsButtonContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const PopUpOptionsButton = styled.button`
  font-size: 150%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  background-color: #d9d9d9;
  border: none;
  border-radius: 5px;
  height: 100%;
  width: 48%;
  cursor: pointer;
  &:hover {
    background-color: #b3b3b3;
  }
`;

export const InputPopUpOptions = styled.input`
  font-size: 180%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  width: 47.5%;
  height: 80%;
  border-radius: 5px;
  border: none;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #f0f0f0; /* Background color */
`;
