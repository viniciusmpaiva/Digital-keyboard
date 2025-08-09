import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const VoiceButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 2px solid;
  border-radius: 25px;
  background: ${({ status }) => {
    switch (status) {
      case 'recording':
        return '#ff4444';
      case 'connected':
        return '#44ff44';
      case 'error':
        return '#ffaa44';
      default:
        return '#f0f0f0';
    }
  }};
  border-color: ${({ status }) => {
    switch (status) {
      case 'recording':
        return '#cc0000';
      case 'connected':
        return '#00cc00';
      case 'error':
        return '#cc8800';
      default:
        return '#ccc';
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case 'recording':
      case 'connected':
        return 'white';
      case 'error':
        return '#333';
      default:
        return '#333';
    }
  }};
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  animation: ${({ status }) => (status === 'recording' ? pulse : 'none')} 1s
    infinite;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
  }
`;

export const VoiceIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ status }) => {
    switch (status) {
      case 'recording':
        return '#fff';
      case 'connected':
        return '#fff';
      case 'error':
        return '#333';
      default:
        return '#333';
    }
  }};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ status }) => {
      switch (status) {
        case 'recording':
          return '#ff4444';
        case 'connected':
          return '#44ff44';
        case 'error':
          return '#ffaa44';
        default:
          return '#ccc';
      }
    }};
  }
`;

export const ErrorMessage = styled.div`
  color: #cc0000;
  font-size: 12px;
  margin-top: 4px;
  text-align: center;
  font-weight: normal;
`;
