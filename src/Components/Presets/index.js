import React from 'react';
import { PresetsContainer, ColumnItems } from './styled';
import PresetButton from '../PresetButton';

export default function Presets({
  setPresets,
  handleNewPreset,
  setEditPressed,
}) {
  const handleClearPresets = () => {
    setPresets([]);
    setEditPressed(false);
    localStorage.removeItem('presets');
  };
  return (
    <PresetsContainer>
      <ColumnItems>
        <button
          type="button"
          className="newPresetButton"
          onClick={handleNewPreset}
        >
          New Preset
        </button>
        <button
          type="button"
          className="clearButton"
          onClick={handleClearPresets}
        >
          CLEAR PRESETS
        </button>
      </ColumnItems>
    </PresetsContainer>
  );
}
