import React, { useEffect } from 'react';
import { PresetsContainer } from './styled';

export default function Presets({
  onPresetButtonClick,
  presets,
  setPresets,
  handleNewPreset,
  presetPressed,
  setEditPressed,
}) {
  const handleClearPresets = () => {
    setPresets([]);
    setEditPressed(false);
    localStorage.removeItem('presets');
  };
  return (
    <PresetsContainer>
      <button
        type="button"
        className="newPresetButton"
        onClick={handleNewPreset}
      >
        New Preset
      </button>
      {presets != null
        ? presets.map((preset, index) => (
            <button
              className={`presetButton ${presetPressed}`}
              key={index}
              type="button"
              onClick={() => onPresetButtonClick(index)}
            >
              Preset {index + 1}
            </button>
          ))
        : null}
      <button
        type="button"
        className="clearButton"
        onClick={handleClearPresets}
      >
        CLEAR PRESETS
      </button>
    </PresetsContainer>
  );
}
