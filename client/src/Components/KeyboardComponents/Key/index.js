import { KeyButton } from './styled';

export default function Key({
  fontSize,
  hover,
  width,
  height,
  marginLeft,
  backgroundColor,
  keyValue,
  handleKeyClick,
  isChangeKeyPressed,
  isChangeBoxPressed,
  indexKey,
  indexBox,
  setTargetKeyIndex,
  setTargetKeyBoxIndex,
  setActiveKeyIndex,
  setActiveKeyBoxIndex,
  targetKeyIndex,
  targetKeyBoxIndex,
  onDropKey,
}) {
  return (
    <KeyButton
      draggable={isChangeKeyPressed}
      className={`${indexKey === targetKeyIndex && indexBox === targetKeyBoxIndex ? 'target' : ''}`}
      key={keyValue}
      onClick={() => handleKeyClick(keyValue)}
      onDragStart={() => {
        setActiveKeyBoxIndex(indexBox);
        setActiveKeyIndex(indexKey);
      }}
      onDragEnd={() => {
        setActiveKeyIndex(null);
        setActiveKeyBoxIndex(null);
        setTargetKeyIndex(null);
        setTargetKeyBoxIndex(null);
      }}
      onDrop={() => {
        if (isChangeBoxPressed) return;
        onDropKey();
        setTargetKeyIndex(null);
        setTargetKeyBoxIndex(null);
      }}
      onDragOver={(e) => {
        if (isChangeBoxPressed) return;

        e.preventDefault();
        setTargetKeyIndex(indexKey);
        setTargetKeyBoxIndex(indexBox);
      }}
      $hover={hover}
      width={width}
      height={height}
      marginLeft={marginLeft}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
    >
      {keyValue}
    </KeyButton>
  );
}
