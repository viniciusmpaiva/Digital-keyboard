import { useState } from 'react';
import Switch from 'react-switch';
import { MdOutlineSpaceBar } from 'react-icons/md';
import { PiArrowFatLineUpLight } from 'react-icons/pi';
import { HiMiniSpeakerWave } from 'react-icons/hi2';

import { SpecialKeyContainer } from './styled';

export default function SpecialKeys({
  text,
  handleCaps,
  handleClear,
  handleSpace,
  upperPressed,
  handleOptionsButton,
  isScanning,
  toggleScan,
  scannedSpecialKeyIndex,
  isSpecialKeysSelected,
}) {
  const [contextInterpreterEnabled, setContextInterpreterEnabled] =
    useState(false);

  const handleToggleContextInterpreter = () => {
    setContextInterpreterEnabled(!contextInterpreterEnabled);
  };

  const handleSpeak = () => {
    console.log('Speak button clicked');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <SpecialKeyContainer>
      <button
        type="button"
        className={`space ${isSpecialKeysSelected && scannedSpecialKeyIndex === 0 ? 'scanned' : ''}`}
        onClick={handleSpace}
      >
        <MdOutlineSpaceBar />
      </button>
      <button
        type="button"
        className={`clear ${isSpecialKeysSelected && scannedSpecialKeyIndex === 1 ? 'scanned' : ''}`}
        onClick={handleClear}
      >
        CLEAR
      </button>
      <button
        type="button"
        className={`upper ${upperPressed} ${isSpecialKeysSelected && scannedSpecialKeyIndex === 2 ? 'scanned' : ''}`}
        onClick={handleCaps}
      >
        <PiArrowFatLineUpLight />
      </button>
      <button
        type="button"
        className={`speak ${isSpecialKeysSelected && scannedSpecialKeyIndex === 3 ? 'scanned' : ''}`}
        onClick={() => handleSpeak(text)}
      >
        <HiMiniSpeakerWave />
      </button>
      <button
        type="button"
        className={`speak ${isSpecialKeysSelected && scannedSpecialKeyIndex === 4 ? 'scanned' : ''}`}
        onClick={handleOptionsButton}
      >
        OPTIONS
      </button>
      <button
        type="button"
        className={`scan ${isSpecialKeysSelected && scannedSpecialKeyIndex === 5 ? 'scanned' : ''}`}
        onClick={toggleScan}
      >
        {isScanning ? 'STOP SCAN' : 'START SCAN'}
      </button>
      {/* <div className="toggle-container">
        Context Interpreter
        <Switch
          onChange={handleToggleContextInterpreter}
          checked={contextInterpreterEnabled}
          onColor="#4caf50"
          onHandleColor="#ffffff"
          handleDiameter={16}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={30}
          width={60}
        />
      </div> */}
    </SpecialKeyContainer>
  );
}
