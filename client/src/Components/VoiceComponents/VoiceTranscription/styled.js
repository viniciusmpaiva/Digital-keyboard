import styled from 'styled-components';

export const TranscriptionContainer = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 12px 16px;
  margin: 8px 0;
  min-height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #6c757d;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TranscriptionText = styled.div`
  font-size: 14px;
  color: #212529;
  line-height: 1.4;
  word-wrap: break-word;
  font-style: ${({ children }) => (children ? 'normal' : 'italic')};

  &:empty::before {
    content: 'Aguardando transcrição...';
    color: #6c757d;
    font-style: italic;
  }
`;
