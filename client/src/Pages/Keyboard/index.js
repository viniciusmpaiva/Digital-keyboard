import React, { useState, useEffect } from 'react';

import KeyboardComponent from '../../Components/KeyboardComponents/KeyboardComponent';
import Options from '../../Components/OptionsComponents/Options';
import Presets from '../../Components/PresetComponents/Presets';
import SavedPresets from '../../Components/PresetComponents/SavedPresets';
import { PageContainer, LeftItems, RightItems } from './styled';

function Keyboard() {
  const [numberOfBoxes, setNumberOfBoxes] = useState(7);
  const [showKeys, setShowKeys] = useState(null);
  const [isChangeBoxPressed, setChangeBoxPressed] = useState(false);
  const [isChangeKeyPressed, setChangeKeyPressed] = useState(false);
  const [isOptionsPressed, setOptionsPressed] = useState(false);
  const [presets, setPresets] = useState([]);
  const [boxes, setBoxes] = useState([
    ['Q', 'I', 'G', 'X'],
    ['W', 'O', 'H', 'C'],
    ['E', 'P', 'J', 'V'],
    ['R', 'A', 'K', 'B'],
    ['T', 'S', 'L', 'N'],
    ['Y', 'D', 'Ç', 'M'],
    ['U', 'F', 'Z', '?'],
  ]);

  const LIMIT_PRESETS = 3;

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const distributeKeys = () => {
      const keyboardComponent = [];
      boxes.forEach((box) => {
        box.forEach((key) => {
          keyboardComponent.push(key);
        });
      });
      const tempBoxes = Array.from({ length: numberOfBoxes }, () => []);
      keyboardComponent.forEach((key, index) => {
        tempBoxes[index % numberOfBoxes].push(key);
      });
      return tempBoxes;
    };
    const newBoxes = distributeKeys();
    if (editing) {
      setBoxes(newBoxes);
      setEditing(false);
    }
  }, [numberOfBoxes]);

  const loadPresets = () => {
    const loadedPresets = JSON.parse(localStorage.getItem('presets'));
    return loadedPresets;
  };

  useEffect(() => {
    const loadedPresets = loadPresets();
    setPresets(loadedPresets);
  }, []);

  useEffect(() => {
    const savePresets = () => {
      localStorage.setItem('presets', JSON.stringify(presets));
    };
    if (presets === null || presets.length <= 0) return;
    savePresets(presets);
  }, [presets]);

  const onSaveButtonClick = () => {
    if (presets === null) {
      setPresets([boxes]);
    } else if (presets.length < LIMIT_PRESETS) {
      const updatedPresets = [...presets, boxes];
      setPresets(updatedPresets);
    }
    setOptionsPressed(!isOptionsPressed);
  };

  const onPresetButtonClick = (index) => {
    setShowKeys(null);
    const loadedPresets = loadPresets();
    const loadedBox = loadedPresets[index];
    const newNumberOfBoxes = loadedBox.length;

    setNumberOfBoxes(newNumberOfBoxes);
    setBoxes(loadedBox);
  };

  const onDeletePresetButtonClick = (index) => {
    const updatedPresets = [...presets];
    updatedPresets.splice(index, 1);
    setPresets(updatedPresets);
  };

  const handleOptionsButton = () => {
    setOptionsPressed(!isOptionsPressed);
    setChangeBoxPressed(false);
    setChangeKeyPressed(false);
  };

  return (
    <PageContainer>
      {/* <LeftItems>
        <Presets
          presets={presets}
          setPresets={setPresets}
          handleNewPreset={handleNewPreset}
          setOptionsPressed={setOptionsPressed}
        />
        <SavedPresets
          onDeletePresetButtonClick={onDeletePresetButtonClick}
          onPresetButtonClick={onPresetButtonClick}
          presets={presets}
        />
      </LeftItems> */}
      {isOptionsPressed ? (
        <Options
          setEditing={setEditing}
          numberOfBoxes={numberOfBoxes}
          setNumberOfBoxes={setNumberOfBoxes}
          setShowKeys={setShowKeys}
          isChangeBoxPressed={isChangeBoxPressed}
          setChangeBoxPressed={setChangeBoxPressed}
          isChangeKeyPressed={isChangeKeyPressed}
          setChangeKeyPressed={setChangeKeyPressed}
          onSaveButtonClick={onSaveButtonClick}
          setOptionsPressed={setOptionsPressed}
        />
      ) : null}
      <RightItems>
        <KeyboardComponent
          handleOptionsButton={handleOptionsButton}
          numberOfBoxes={numberOfBoxes}
          showKeys={showKeys}
          setShowKeys={setShowKeys}
          isChangeBoxPressed={isChangeBoxPressed}
          isChangeKeyPressed={isChangeKeyPressed}
          boxes={boxes}
          setBoxes={setBoxes}
        />
      </RightItems>
    </PageContainer>
  );
}

export default Keyboard;
