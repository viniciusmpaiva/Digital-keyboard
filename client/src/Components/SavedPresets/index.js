import React from 'react';

import PresetButton from '../PresetButton';

import { SavedPresetsContainer } from './styled';

export default function SavedPresets({
  presets,
  presetPressed,
  onPresetButtonClick,
  onDeletePresetButtonClick,
}) {
  return (
    <SavedPresetsContainer>
      {presets != null
        ? presets.map((preset, index) => (
            <PresetButton
              key={index}
              index={index}
              presetPressed={presetPressed}
              onPresetButtonClick={onPresetButtonClick}
              onDeletePresetButtonClick={onDeletePresetButtonClick}
            />
          ))
        : null}
    </SavedPresetsContainer>
  );
}
