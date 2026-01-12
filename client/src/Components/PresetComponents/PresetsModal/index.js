import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as presetActions from '../../../store/Modules/presets/actions';

import Modal from '../../PageComponents/Modal';
import Button from '../../PageComponents/Button';

import { PresetsModalContainer } from './styled';

export default function PresetsModal({
  setIsPresetsModalOpen,
  isPresetsModalOpen,
  presets,
  setNumberOfBoxes,
  setSelectedPreset,
  selectedPreset,
  numberOfBoxes,
  profileId,
}) {
  console.log(`presets: ${presets}`);
  const dispatch = useDispatch();

  const handleReturnCLick = () => {
    setIsPresetsModalOpen(!isPresetsModalOpen);
  };

  const handlePresetClick = (preset) => {
    setNumberOfBoxes(preset.numberOfBoxes);
    setSelectedPreset(preset.presetData);
    setIsPresetsModalOpen(!isPresetsModalOpen);
  };

  const handleSavePreset = () => {
    const presetData = {
      name: 'default',
      presetData: selectedPreset,
      numberOfBoxes,
      profileId,
    };
    dispatch(presetActions.postPresetsRequest(presetData));
  };

  return (
    <Modal>
      <PresetsModalContainer>
        <Button
          content="Save Preset"
          height="50%"
          width="50%"
          color="#1e1e1e"
          onclick={handleSavePreset}
        />
        {presets &&
          presets.map((preset) => (
            <Button
              key={preset.id}
              content={preset.name}
              height="50%"
              width="50%"
              color="#1e1e1e"
              onclick={() => handlePresetClick(preset)}
            />
          ))}
        <Button
          content="Return"
          height="50%"
          width="50%"
          color="#1e1e1e"
          onclick={handleReturnCLick}
        />
      </PresetsModalContainer>
    </Modal>
  );
}
