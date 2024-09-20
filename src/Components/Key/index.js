import { useState } from 'react';
import { KeyButton } from './styled';

export default function Key({
  keyValue,
  handleKeyClick,
  lineNumber,
  setActiveCard,
  onDrop,
  targetIndex,
  setTargetIndex,
  index,
  changePressed,
}) {
  const [isDragging, setIsDragging] = useState(false);
  let fixedIndex;
  if (lineNumber === 'line2') {
    fixedIndex = index + 10;
  } else if (lineNumber === 'line3') {
    fixedIndex = index + 20;
  } else {
    fixedIndex = index;
  }

  return (
    <KeyButton
      className={`${lineNumber} ${isDragging ? 'dragging' : ''} ${targetIndex === fixedIndex ? 'target' : ''}`}
      key={keyValue}
      onClick={() => handleKeyClick(keyValue)}
      draggable={changePressed}
      onDragStart={() => {
        setActiveCard(keyValue);
        setIsDragging(true);
      }}
      onDragEnd={() => {
        setActiveCard(null);
        setIsDragging(false);
        setTargetIndex(null);
      }}
      onDrop={() => {
        onDrop();
        setIsDragging(false);
        setTargetIndex(null);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setTargetIndex(fixedIndex);
      }}
    >
      {keyValue}
    </KeyButton>
  );
}
