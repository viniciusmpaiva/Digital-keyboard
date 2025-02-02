import React from 'react';

import {
  PresetButtonContainer,
  PresetDeleteButton,
  PresetNameButton,
  PresetOptionsContainer,
  PresetRenameButton,
} from './styled';

export default function PresetButton({ index, onPresetButtonClick }) {
  return (
    <PresetButtonContainer>
      <PresetNameButton onClick={() => onPresetButtonClick(index)}>
        Preset {index + 1}
      </PresetNameButton>
      <PresetOptionsContainer>
        <PresetDeleteButton>Delete</PresetDeleteButton>
        <PresetRenameButton>Rename</PresetRenameButton>
      </PresetOptionsContainer>
    </PresetButtonContainer>
  );
}
