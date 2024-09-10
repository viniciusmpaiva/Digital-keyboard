import { FaDeleteLeft } from 'react-icons/fa6';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { SpecialButtonsContainer } from './styled';

export default function SpecialButtons({ onClick }) {
  return (
    <SpecialButtonsContainer>
      <button type="button" className="delete" onClick={onClick}>
        <FaDeleteLeft />
      </button>
      <button type="button" className="enter">
        <MdOutlineKeyboardReturn />
      </button>
    </SpecialButtonsContainer>
  );
}
