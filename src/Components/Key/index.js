import { useState } from 'react';
import { KeyButton } from './styled';

export default function Key({
  keyValue,
  isDisabled,
  handleKeyClick,
  // targetIndex,
  // lineNumber,
  // setActiveCard,
  // onDrop,
  // setTargetIndex,
  // index,
  // changePressed,
  width,
  height,
  marginLeft,
  backgroundColor,
  fontSize,
  numberOfKeys,
}) {
  return (
    <KeyButton
      // className={`${lineNumber} ${isDragging ? 'dragging' : ''} ${targetIndex === fixedIndex ? 'target' : ''} ${isDisabled ? 'disabled' : ''}`}
      className={`${isDisabled ? 'disabled' : ''}`}
      key={keyValue}
      onClick={() => handleKeyClick(keyValue)}
      // draggable={changePressed}
      // onDragStart={() => {
      //   setActiveCard(keyValue);
      //   setIsDragging(true);
      // }}
      // onDragEnd={() => {
      //   setActiveCard(null);
      //   setIsDragging(false);
      //   setTargetIndex(null);
      // }}
      // onDrop={() => {
      // onDrop();
      //   setIsDragging(false);
      //   setTargetIndex(null);
      // }}
      // onDragOver={(e) => {
      //   e.preventDefault();
      //   setTargetIndex(fixedIndex);
      // }}
      width={width}
      height={height}
      marginleft={marginLeft}
      backgroundcolor={backgroundColor}
      fontSize={fontSize}
      // numberOfKeys={numberOfKeys}
    >
      {keyValue}
    </KeyButton>
  );
}
