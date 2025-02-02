import React from 'react';

import Key from '../Key';
import { LineContainer } from './styled';

export default function Line({ keys, handleKeyClick, numberOfKeyBoxes }) {
  let widthKey;
  const heightKey = 90;
  if (numberOfKeyBoxes === 7) {
    widthKey = 24;
  } else if (numberOfKeyBoxes === 6) {
    widthKey = 19;
  } else if (numberOfKeyBoxes === 5) {
    widthKey = 16;
  } else if (numberOfKeyBoxes === 4) {
    widthKey = 13;
  } else {
    widthKey = 9;
  }
  return (
    <LineContainer>
      {keys.map((key) => {
        return (
          <Key
            isLine
            key={key}
            keyValue={key}
            handleKeyClick={handleKeyClick}
            width={widthKey}
            height={heightKey}
            // marginLeft="5px"
            backgroundColor="#d9d9d9"
            fontSize="20px"
          />
        );
      })}
    </LineContainer>
  );
}
