import { FaDeleteLeft } from 'react-icons/fa6';
import { DeleteButtonStyle } from './styled';

export default function DeleteButton({ onClick }) {
  return (
    <DeleteButtonStyle onClick={onClick}>
      <FaDeleteLeft />
    </DeleteButtonStyle>
  );
}
