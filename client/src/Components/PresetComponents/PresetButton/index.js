import React from 'react';
import { PresetButtonContainer } from './styled';

export default function PresetButton({ content, onClick }) {
  return (
    <PresetButtonContainer onClick={onClick}>{content}</PresetButtonContainer>
  );
}
