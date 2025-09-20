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
      <button type="button" className="space" onClick={handleSpace}>
        <MdOutlineSpaceBar />
      </button>
      <button type="button" className="clear" onClick={handleClear}>
        CLEAR
      </button>
      <button
        type="button"
        className={`upper ${upperPressed}`}
        onClick={handleCaps}
      >
        <PiArrowFatLineUpLight />
      </button>
      <button type="button" className="speak" onClick={() => handleSpeak(text)}>
        <HiMiniSpeakerWave />
      </button>
      <button type="button" className="speak" onClick={handleOptionsButton}>
        OPTIONS
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
