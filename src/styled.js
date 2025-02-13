import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-color: rgb(75, 68, 68);
`;

export const LeftItems = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const RightItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;
