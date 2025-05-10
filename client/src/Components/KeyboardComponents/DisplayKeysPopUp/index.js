import React from 'react';
import { DisplayKeysPopUpContainer, PopUp, PopUpContainer } from './styled';

import Key from '../Key';
import PopUpOptions from '../PopUpOptions';

export default function DisplayKeysPopUp({
  keys,
  numberOfKeyBoxes,
  handleKeyClick,
  text,
  inputRef,
  setShowKeys,
  handleDelete,
}) {
  let widthKey;
  const heightKey = 100;
  if (numberOfKeyBoxes === 7) {
    widthKey = 24;
  } else if (numberOfKeyBoxes === 6) {
    widthKey = 19.5;
  } else if (numberOfKeyBoxes === 5) {
    widthKey = 16;
  } else if (numberOfKeyBoxes === 4) {
    widthKey = 14;
  } else {
    widthKey = 9.5;
  }

  return (
    <PopUpContainer>
      <PopUp>
        <PopUpOptions
          text={text}
          inputRef={inputRef}
          setShowKeys={setShowKeys}
          handleDelete={handleDelete}
        />
        <DisplayKeysPopUpContainer>
          {keys.map((key) => {
            return (
              <Key
                isLine
                key={key}
                keyValue={key}
                handleKeyClick={handleKeyClick}
                width={widthKey}
                height={heightKey}
                backgroundColor="#d9d9d9"
                fontSize="20px"
              />
            );
          })}
        </DisplayKeysPopUpContainer>
      </PopUp>
    </PopUpContainer>
  );
}
