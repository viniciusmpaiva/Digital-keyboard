import { KeyButton } from './styled';

export default function Key({
  width,
  height,
  marginLeft,
  backgroundColor,
  fontSize,
  isLine,
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
      className={`${indexKey === targetKeyIndex && indexBox === targetKeyBoxIndex && !isLine ? 'target' : ''}`}
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
