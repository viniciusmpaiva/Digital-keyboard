import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-color: rgb(75, 68, 68);
`;

export const OptionsDisplay = styled.div`
  flex-direction: row;
  display: flex;
  width: 85%;
  height: 20%;
  margin-bottom: 1%;
`;

export const LeftItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  justify-content: flex-end;
`;
