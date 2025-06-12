import React from 'react';
import {
  NumberOfBoxesContainer,
  NumberOfBoxesPopUpButtonsContainer,
  NumberOfBoxesPopUpContainer,
} from './styled';

export default function NumberOfBoxesPopUp({
  setNumberOfBoxesPressed,
  setNumberOfBoxes,
  numberOfBoxes,
  setEditing,
}) {
  const onPlusClick = () => {
    if (numberOfBoxes > 6) {
      return;
    }
    setEditing(true);
    setNumberOfBoxes(numberOfBoxes + 1);
  };
  const onMinusClick = () => {
    if (numberOfBoxes < 4) {
      return;
    }
    setEditing(true);
    setNumberOfBoxes(numberOfBoxes - 1);
  };

  return (
    <NumberOfBoxesContainer>
      <NumberOfBoxesPopUpContainer>
        <NumberOfBoxesPopUpButtonsContainer>
          <button type="button" onClick={() => onPlusClick()}>
            +
          </button>
          <button type="button" onClick={() => onMinusClick()}>
            -
          </button>
          <button type="button" onClick={() => setNumberOfBoxesPressed(false)}>
            Return
          </button>
          <input type="text" value={numberOfBoxes} autoFocus />
        </NumberOfBoxesPopUpButtonsContainer>
      </NumberOfBoxesPopUpContainer>
    </NumberOfBoxesContainer>
  );
}
