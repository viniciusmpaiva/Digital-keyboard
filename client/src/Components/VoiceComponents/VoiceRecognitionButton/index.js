import React from 'react';
import { VoiceButton, VoiceIcon, ErrorMessage } from './styled';

function VoiceRecognitionButton({
  isRecording,
  isConnected,
  error,
  onToggleRecording,
}) {
  const getButtonText = () => {
    if (error) return 'Erro';
    if (isRecording) return 'Parar';
    if (isConnected) return 'Conectado';
    return 'Voz';
  };

  const getButtonStatus = () => {
    if (error) return 'error';
    if (isRecording) return 'recording';
    if (isConnected) return 'connected';
    return 'inactive';
  };

  return (
    <div>
      <VoiceButton
        onClick={onToggleRecording}
        status={getButtonStatus()}
        disabled={!!error}
      >
        <VoiceIcon status={getButtonStatus()} />
        {getButtonText()}
      </VoiceButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}

export default VoiceRecognitionButton;
