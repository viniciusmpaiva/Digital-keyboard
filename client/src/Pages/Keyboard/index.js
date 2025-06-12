import React, { useState, useEffect } from 'react';

import KeyboardComponent from '../../Components/KeyboardComponents/KeyboardComponent';
import SuggestedWords from '../../Components/SuggestedWordsComponents/SuggestedWords';
import Options from '../../Components/OptionsComponents/Options';
import { PageContainer } from './styled';

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

  useEffect(() => {
    const savePresets = () => {
      localStorage.setItem('presets', JSON.stringify(presets));
    };
    if (presets === null || presets.length <= 0) return;
    savePresets(presets);
  }, [presets]);

  const handleOptionsButton = () => {
    setOptionsPressed(!isOptionsPressed);
    setChangeBoxPressed(false);
    setChangeKeyPressed(false);
  };

  return (
    <PageContainer>
      {isOptionsPressed ? (
        <Options
          setBoxes={setBoxes}
          setEditing={setEditing}
          numberOfBoxes={numberOfBoxes}
          setNumberOfBoxes={setNumberOfBoxes}
          setChangeBoxPressed={setChangeBoxPressed}
          setChangeKeyPressed={setChangeKeyPressed}
          setOptionsPressed={setOptionsPressed}
        />
      ) : null}
      <SuggestedWords />
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
    </PageContainer>
  );
}

export default Keyboard;
