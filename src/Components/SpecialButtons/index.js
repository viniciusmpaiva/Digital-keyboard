import { SpecialButtonsContainer } from './styled';
import EnterButton from '../EnterButton';
import DeleteButton from '../DeleteButton';

export default function SpecialButtons({ onClick, changePressed }) {
  return (
    <SpecialButtonsContainer>
      <DeleteButton onClick={onClick} />
      <EnterButton onClick={onClick} />
    </SpecialButtonsContainer>
  );
}
