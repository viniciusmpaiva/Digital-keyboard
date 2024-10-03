import { FaDeleteLeft } from 'react-icons/fa6';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { CiLock, CiUnlock } from 'react-icons/ci';
import { SpecialButtonsContainer } from './styled';

export default function SpecialButtons({ onClick, changePressed }) {
  return (
    <SpecialButtonsContainer>
      {/* <button
        type="button"
        className={changePressed ? 'change pressed' : 'change'}
        onClick={onClick}
      >
        {changePressed ? <CiUnlock /> : <CiLock />}
      </button> */}
      <div className="enter-backspace">
        <button type="button" className="delete" onClick={onClick}>
          <FaDeleteLeft />
        </button>
        <button type="button" className="enter">
          <MdOutlineKeyboardReturn />
        </button>
      </div>
    </SpecialButtonsContainer>
  );
}
