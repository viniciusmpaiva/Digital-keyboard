import { MdOutlineSpaceBar } from 'react-icons/md';
import { PiArrowFatLineUpLight } from 'react-icons/pi';
import { HiMiniSpeakerWave } from 'react-icons/hi2';

import { SpecialKeyContainer } from './styled';

export default function SpecialKeys({
  handleCaps,
  handleClear,
  handleSpace,
  upperPressed,
  handleOptionsButton,
}) {
  return (
    <SpecialKeyContainer>
      <button type="button" className="space" onClick={handleSpace}>
        <MdOutlineSpaceBar />
      </button>
      <button type="button" className="clear" onClick={handleClear}>
        Clear
      </button>
      <button
        type="button"
        className={`upper ${upperPressed}`}
        onClick={handleCaps}
      >
        <PiArrowFatLineUpLight />
      </button>
      <button type="button" className=" speak" onClick={handleCaps}>
        <HiMiniSpeakerWave />
      </button>
      <button type="button" className=" speak" onClick={handleOptionsButton}>
        Options
      </button>
    </SpecialKeyContainer>
  );
}
