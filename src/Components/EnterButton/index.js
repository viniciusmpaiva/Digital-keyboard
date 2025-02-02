import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { EnterButtonStyle } from './styled';

export default function EnterButton({ onClick }) {
  return (
    <EnterButtonStyle onClick={onClick}>
      <MdOutlineKeyboardReturn />
    </EnterButtonStyle>
  );
}
