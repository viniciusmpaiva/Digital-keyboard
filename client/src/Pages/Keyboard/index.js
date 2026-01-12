import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import KeyboardComponent from '../../Components/KeyboardComponents/KeyboardComponent';
import SuggestedWords from '../../Components/SuggestedWordsComponents/SuggestedWords';
import PresetsModal from '../../Components/PresetComponents/PresetsModal';
import Options from '../../Components/OptionsComponents/Options';
import Presets from '../../Components/PresetComponents/Presets';
import { PageContainer } from './styled';
import * as presetActions from '../../store/Modules/presets/actions';

function Keyboard() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [suggestedWords, setSuggestedWords] = useState([]);
  const [numberOfBoxes, setNumberOfBoxes] = useState(7);
  const [showKeys, setShowKeys] = useState(null);
  const [isChangeBoxPressed, setChangeBoxPressed] = useState(false);
  const [isChangeKeyPressed, setChangeKeyPressed] = useState(false);
  const [isOptionsPressed, setOptionsPressed] = useState(false);
  const [isPresetsModalOpen, setIsPresetsModalOpen] = useState(false);

  const [selectedPreset, setSelectedPreset] = useState([
    ['Q', 'I', 'G', 'X'],
    ['W', 'O', 'H', 'C'],
    ['E', 'P', 'J', 'V'],
    ['R', 'A', 'K', 'B'],
    ['T', 'S', 'L', 'N'],
    ['Y', 'D', 'Ç', 'M'],
    ['U', 'F', 'Z', '?'],
  ]);

  const [isScanning, setIsScanning] = useState(false);
  const [scannedBoxIndex, setScannedBoxIndex] = useState(0);
  const [scannedKeyIndex, setScannedKeyIndex] = useState(0);
  const [isBoxSelected, setIsBoxSelected] = useState(false);
  const [keyScanCycles, setKeyScanCycles] = useState(0);
  const [scannedSpecialKeyIndex, setScannedSpecialKeyIndex] = useState(0);
  const [isSpecialKeysSelected, setIsSpecialKeysSelected] = useState(false);

  const specialKeys = ['SPACE', 'CLEAR', 'CAPS', 'OPTIONS', 'SCAN'];

  const [editing, setEditing] = useState(false);

  // Effect for scanning logic
  useEffect(() => {
    if (!isScanning) {
      return () => {};
    }

    const scanInterval = setInterval(() => {
      if (!isBoxSelected && !isSpecialKeysSelected) {
        // Scanning boxes and special keys area
        const totalItems = selectedPreset.length + 1;
        setScannedBoxIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % totalItems;
          if (nextIndex === selectedPreset.length) {
            // Moving to special keys area
            setIsSpecialKeysSelected(true);
            setScannedSpecialKeyIndex(0);
          }
          return nextIndex;
        });
      } else if (isBoxSelected && !isSpecialKeysSelected) {
        // Scanning keys within the selected box
        const currentBox = selectedPreset[scannedBoxIndex];
        if (!currentBox) return;

        setScannedKeyIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % currentBox.length;
          if (nextIndex === 0) {
            // A full cycle of key scanning is complete
            setKeyScanCycles((prevCycles) => prevCycles + 1);
          }
          return nextIndex;
        });
      } else if (isSpecialKeysSelected) {
        // Scanning special keys
        setScannedSpecialKeyIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % specialKeys.length;
          if (nextIndex === 0) {
            // Finished scanning all special keys, go back to box scanning
            setIsSpecialKeysSelected(false);
            setIsBoxSelected(false);
            setScannedBoxIndex(0);
            setScannedKeyIndex(0);
          }
          return nextIndex;
        });
      }
    }, 1000); // Scan speed: 1 second

    return () => clearInterval(scanInterval);
  }, [
    isScanning,
    isBoxSelected,
    isSpecialKeysSelected,
    selectedPreset,
    scannedBoxIndex,
  ]);

  // Effect to handle exiting key scan after 3 cycles
  useEffect(() => {
    if (keyScanCycles >= 2) {
      setIsBoxSelected(false); // Go back to box scanning
      setKeyScanCycles(0); // Reset cycle counter
      setScannedKeyIndex(0);
    }
  }, [keyScanCycles]);

  const toggleScan = () => {
    const willScan = !isScanning;
    setIsScanning(willScan);
    // Reset state when turning scanning on or off
    setIsBoxSelected(false);
    setIsSpecialKeysSelected(false);
    setScannedBoxIndex(0);
    setScannedKeyIndex(0);
    setScannedSpecialKeyIndex(0);
    setKeyScanCycles(0);
  };

  const handleKeyPress = (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      if (!isScanning) return;

      if (!isBoxSelected && !isSpecialKeysSelected) {
        // Box scanning is active, select the box or special keys area
        if (scannedBoxIndex === selectedPreset.length) {
          // Special keys area is selected
          setIsSpecialKeysSelected(true);
          setScannedSpecialKeyIndex(0);
        } else {
          // Regular box is selected
          setIsBoxSelected(true);
          setScannedKeyIndex(0);
          setKeyScanCycles(0);
        }
      } else if (isBoxSelected && !isSpecialKeysSelected) {
        // Key scanning is active, select the key
        const selectedBox = selectedPreset[scannedBoxIndex];
        const selectedKey = selectedBox[scannedKeyIndex];
        const newText = text + selectedKey;
        setText(newText);

        // Reset key scanning to continue in the same box
        setScannedKeyIndex(0);
        setKeyScanCycles(0);
      } else if (isSpecialKeysSelected) {
        // Special key is selected, execute the action
        const selectedSpecialKey = specialKeys[scannedSpecialKeyIndex];
        if (selectedSpecialKey === 'SPACE') {
          const spacedText = `${text} `;
          setText(spacedText);
        } else if (selectedSpecialKey === 'CLEAR') {
          setText('');
        } else if (selectedSpecialKey === 'CAPS') {
          // Trigger caps toggle - need to handle this through the component
        } else if (selectedSpecialKey === 'OPTIONS') {
          setOptionsPressed(!isOptionsPressed);
          setChangeBoxPressed(false);
          setChangeKeyPressed(false);
        } else if (selectedSpecialKey === 'SCAN') {
          toggleScan();
        }

        // Go back to box scanning after selecting a special key
        setIsSpecialKeysSelected(false);
        setIsBoxSelected(false);
        setScannedBoxIndex(0);
        setScannedKeyIndex(0);
        setScannedSpecialKeyIndex(0);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
    // Dependencies are crucial for the event listener to have the latest state
  }, [
    isScanning,
    isBoxSelected,
    scannedBoxIndex,
    scannedKeyIndex,
    text,
    selectedPreset,
  ]);

  const selectedProfile = useSelector(
    (state) => state.profiles.selectedProfile
  );

  const presets = useSelector((state) => state.presets.presets);

  useEffect(() => {
    if (selectedProfile && selectedProfile._id) {
      dispatch(
        presetActions.getPresetsRequest({ profileId: selectedProfile._id })
      );
    }
  }, [selectedProfile, dispatch]);

  useEffect(() => {
    const distributeKeys = () => {
      const keyboardComponent = [];
      selectedPreset.forEach((box) => {
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
      setSelectedPreset(newBoxes);
      setEditing(false);
    }
  }, [numberOfBoxes]);

  const handleOptionsButton = () => {
    setOptionsPressed(!isOptionsPressed);
    setChangeBoxPressed(false);
    setChangeKeyPressed(false);
  };

  return (
    <PageContainer>
      {isPresetsModalOpen ? (
        <PresetsModal
          presets={presets}
          setIsPresetsModalOpen={setIsPresetsModalOpen}
          isPresetsModalOpen={isPresetsModalOpen}
          setNumberOfBoxes={setNumberOfBoxes}
          setSelectedPreset={setSelectedPreset}
          selectedPreset={selectedPreset}
          numberOfBoxes={numberOfBoxes}
          profileId={selectedProfile._id}
        />
      ) : null}
      {isOptionsPressed ? (
        <Options
          setBoxes={setSelectedPreset}
          setEditing={setEditing}
          numberOfBoxes={numberOfBoxes}
          setNumberOfBoxes={setNumberOfBoxes}
          setChangeBoxPressed={setChangeBoxPressed}
          setChangeKeyPressed={setChangeKeyPressed}
          setOptionsPressed={setOptionsPressed}
        />
      ) : null}
      {suggestedWords.length > 0 ? (
        <SuggestedWords
          suggestedWords={suggestedWords}
          setText={setText}
          text={text}
        />
      ) : (
        <Presets
          presetsModalOpen={isPresetsModalOpen}
          isPresetsModalOpen={setIsPresetsModalOpen}
        />
      )}
      <KeyboardComponent
        text={text}
        setText={setText}
        handleOptionsButton={handleOptionsButton}
        numberOfBoxes={numberOfBoxes}
        showKeys={showKeys}
        setShowKeys={setShowKeys}
        isChangeBoxPressed={isChangeBoxPressed}
        isChangeKeyPressed={isChangeKeyPressed}
        boxes={selectedPreset}
        setBoxes={setSelectedPreset}
        isScanning={isScanning}
        scannedBoxIndex={scannedBoxIndex}
        setScannedBoxIndex={setScannedBoxIndex}
        scannedKeyIndex={scannedKeyIndex}
        setScannedKeyIndex={setScannedKeyIndex}
        isBoxSelected={isBoxSelected}
        toggleScan={toggleScan}
        scannedSpecialKeyIndex={scannedSpecialKeyIndex}
        isSpecialKeysSelected={isSpecialKeysSelected}
      />
    </PageContainer>
  );
}

export default Keyboard;
