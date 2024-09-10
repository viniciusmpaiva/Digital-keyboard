import { MdOutlineSpaceBar } from 'react-icons/md';
import { PiArrowFatLineUpLight } from 'react-icons/pi';

import { SpecialKeyContainer } from './styled';

export default function SpecialKeys({
  handleCaps,
  handleClear,
  handleSpace,
  upperPressed,
}) {
  return (
    <SpecialKeyContainer>
      <button type="button" className="space" onClick={handleSpace}>
        <MdOutlineSpaceBar />
      </button>
      <button type="button" className="clear" onClick={handleClear}>
        Clear
      </button>
      <button type="button" className={upperPressed} onClick={handleCaps}>
        <PiArrowFatLineUpLight />
      </button>
    </SpecialKeyContainer>
  );
}
