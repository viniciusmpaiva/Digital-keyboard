import { KeyButton } from './styled';

export default function Key({
  keyValue,
  handleKeyClick,
  lineNumber,
  setActiveCard,
  onDrop,
}) {
  return (
    <KeyButton
      className={lineNumber}
      key={keyValue}
      onClick={() => handleKeyClick(keyValue)}
      draggable
      onDragStart={() => setActiveCard(keyValue)}
      onDragEnd={() => setActiveCard(null)}
      onDrop={() => onDrop()}
      onDragOver={(e) => e.preventDefault()}
    >
      {keyValue}
    </KeyButton>
  );
}
