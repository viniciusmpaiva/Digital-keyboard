import React, { useState, useEffect } from 'react';

import Keyboard from './Components/Keyboard';
import Options from './Components/Options';
import Presets from './Components/Presets';

function App() {
  const [numberOfBoxes, setNumberOfBoxes] = useState(7);
  const [showKeys, setShowKeys] = useState(null);
  const [isChangeBoxPressed, setChangeBoxPressed] = useState(false);
  const [isChangeKeyPressed, setChangeKeyPressed] = useState(false);
  const [isEditPressed, setEditPressed] = useState(false);
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

  useEffect(() => {
    const distributeKeys = () => {
      const keyboard = [];
      boxes.forEach((box) => {
        box.forEach((key) => {
          keyboard.push(key);
        });
      });
      const tempBoxes = Array.from({ length: numberOfBoxes }, () => []);
      keyboard.forEach((key, index) => {
        tempBoxes[index % numberOfBoxes].push(key);
      });
      return tempBoxes;
    };
    const newBoxes = distributeKeys();
    setBoxes(newBoxes);
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
    } else if (presets.length < 5) {
      const updatedPresets = [...presets, boxes];
      setPresets(updatedPresets);
    }
    setEditPressed(!isEditPressed);
  };

  const onPresetButtonClick = (index) => {
    setShowKeys(null);
    const loadedPresets = loadPresets();
    const loadedBox = loadedPresets[index];
    const newNumberOfBoxes = loadedBox.length;
    setNumberOfBoxes(newNumberOfBoxes);
    setBoxes(loadedBox);
  };

  const handleEditPressed = () => {
    setEditPressed(!isEditPressed);
    setChangeBoxPressed(false);
    setChangeKeyPressed(false);
  };

  return (
    <>
      <Keyboard
        numberOfBoxes={numberOfBoxes}
        showKeys={showKeys}
        setShowKeys={setShowKeys}
        isChangeBoxPressed={isChangeBoxPressed}
        isChangeKeyPressed={isChangeKeyPressed}
        boxes={boxes}
        setBoxes={setBoxes}
      />
      {isEditPressed === true ? (
        <Options
          numberOfBoxes={numberOfBoxes}
          setNumberOfBoxes={setNumberOfBoxes}
          setShowKeys={setShowKeys}
          isChangeBoxPressed={isChangeBoxPressed}
          setChangeBoxPressed={setChangeBoxPressed}
          isChangeKeyPressed={isChangeKeyPressed}
          setChangeKeyPressed={setChangeKeyPressed}
          onSaveButtonClick={onSaveButtonClick}
          setEditPressed={setEditPressed}
        />
      ) : null}
      <Presets
        onPresetButtonClick={onPresetButtonClick}
        presets={presets}
        setPresets={setPresets}
        handleEditPressed={handleEditPressed}
        setEditPressed={setEditPressed}
      />
    </>
  );
}

export default App;
