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
  numberOfKeyBoxes,
}) {
  let widthKey;
  let heightKey;
  if (numberOfKeyBoxes === 7) {
    widthKey = 119;
    heightKey = 70;
  } else if (numberOfKeyBoxes === 6) {
    widthKey = 94;
    heightKey = 70;
  } else if (numberOfKeyBoxes === 5) {
    widthKey = 77;
    heightKey = 70;
  } else if (numberOfKeyBoxes === 4) {
    widthKey = 65;
    heightKey = 70;
  } else {
    widthKey = 44;
    heightKey = 70;
  }
  return (
    <LineContainer>
      {keys.map((key, index) => {
        return (
          <Key
            key={key}
            keyValue={key}
            handleKeyClick={handleKeyClick}
            // lineNumber={lineNumber}
            // setActiveCard={setActiveCard}
            // onDrop={() => onDrop(lineNumber, index)}
            // targetIndex={targetIndex}
            // setTargetIndex={setTargetIndex}
            // index={index}
            // changePressed={changePressed}
            width={widthKey}
            height={heightKey}
            // height="60px"
            marginLeft="5px"
            backgroundColor="#d9d9d9"
            fontSize="20px"
          />
        );
      })}
    </LineContainer>
  );
}
