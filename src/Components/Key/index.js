import { KeyButton } from './styled';

export default function Key({
  keyValue,
  handleKeyClick,
  // targetIndex,
  // lineNumber,
  setActiveKey,
  onDropKey,
  setTargetIndexKey,
  // indexBox,
  // changePressed,
  width,
  height,
  marginLeft,
  backgroundColor,
  fontSize,
  isChangeKeyPressed,
}) {
  let fixedIndex = 0;
  return (
    <KeyButton
      draggable={isChangeKeyPressed}
      // className={`${lineNumber} ${isDragging ? 'dragging' : ''} ${targetIndex === fixedIndex ? 'target' : ''} ${isDisabled ? 'disabled' : ''}`}
      // className={`${isDisabled ? 'disabled' : ''}`}
      key={keyValue}
      onClick={() => handleKeyClick(keyValue)}
      onDragStart={() => {
        setActiveKey(keyValue);
      }}
      onDragEnd={() => {
        setActiveKey(null);
        setTargetIndexKey(null);
      }}
      onDropKey={() => {
        onDropKey();
        setTargetIndexKey(null);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setTargetIndexKey(fixedIndex);
      }}
      width={width}
      height={height}
      marginleft={marginLeft}
      backgroundcolor={backgroundColor}
      fontSize={fontSize}
    >
      {keyValue}
    </KeyButton>
  );
}
