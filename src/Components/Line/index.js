import React from 'react';

import Key from '../Key';
import { LineContainer } from './styled';

export default function Line({
  keys,
  handleKeyClick,
  lineNumber,
  setActiveCard,
  onDrop,
  targetIndex,
  setTargetIndex,
  changePressed,
}) {
  return (
    <LineContainer>
      {keys.map((key, index) => {
        return (
          <Key
            key={key}
            keyValue={key}
            handleKeyClick={handleKeyClick}
            lineNumber={lineNumber}
            setActiveCard={setActiveCard}
            onDrop={() => onDrop(lineNumber, index)}
            targetIndex={targetIndex}
            setTargetIndex={setTargetIndex}
            index={index}
            changePressed={changePressed}
          />
        );
      })}
    </LineContainer>
  );
}
