import { KeyBoxContainer } from './styled';
import Key from '../Key';

export default function KeyBox({ keys, onBoxClick }) {
  return (
    <KeyBoxContainer onClick={() => onBoxClick(keys)}>
      {keys.map((key) => {
        return (
          <Key
            key={key}
            keyValue={key}
            isDisabled
            targetIndex={null}
            width="50px"
            height="40px"
          />
        );
      })}
    </KeyBoxContainer>
  );
}
