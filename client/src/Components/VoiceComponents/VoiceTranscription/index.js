import React from 'react';
import { TranscriptionContainer, TranscriptionText, Label } from './styled';

function VoiceTranscription({ transcription, isVisible }) {
  if (!isVisible || !transcription) {
    return null;
  }

  return (
    <TranscriptionContainer>
      <Label>Transcrição:</Label>
      <TranscriptionText>{transcription}</TranscriptionText>
    </TranscriptionContainer>
  );
}

export default VoiceTranscription;
