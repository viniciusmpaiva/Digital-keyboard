import { KeyButton } from './styled';

export default function Key({ keyValue, handleKeyClick, lineNumber }) {
  return (
    <KeyButton
      className={lineNumber}
      type="button"
      key={keyValue}
      onClick={() => handleKeyClick(keyValue)}
    >
      {keyValue}
      {console.log(keyValue)}
    </KeyButton>
  );
}
