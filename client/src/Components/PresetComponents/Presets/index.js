import React from 'react';
import PresetButton from '../PresetButton';
import { PresetsContainer } from './styled';

export default function Presets({ presetsModalOpen, isPresetsModalOpen }) {
  const handleNewPresetClick = () => {
    isPresetsModalOpen(!presetsModalOpen);
  };

  return (
    <PresetsContainer>
      <PresetButton
        content="Presets Configuration"
        onClick={handleNewPresetClick}
      />
    </PresetsContainer>
  );
}
