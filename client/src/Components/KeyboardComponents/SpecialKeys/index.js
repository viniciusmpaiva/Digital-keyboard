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
    </SpecialKeyContainer>
  );
}
