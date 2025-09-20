import React from 'react';
import PresetButton from '../PresetButton';
import { PresetsContainer } from './styled';

export default function Presets() {
  return (
    <PresetsContainer>
      <PresetButton content="New Preset" />
    </PresetsContainer>
  );
}
