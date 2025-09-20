import React, { useState, useEffect } from 'react';
import { OptionsButtonsContainer } from './styled';
import NumberOfBoxesModal from '../NumberOfBoxesModal';
import Modal from '../../PageComponents/Modal';

export default function Options({
  setBoxes,
  numberOfBoxes,
  setNumberOfBoxes,
  setChangeBoxPressed,
  setChangeKeyPressed,
  setOptionsPressed,
  setEditing,
}) {
  const [isNumberOfBoxesPressed, setNumberOfBoxesPressed] = useState(false);

  const alph = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X'],
    ['Y', 'Z', 'Ç', '?'],
  ];

  const kwert = [
    ['Q', 'W', 'E', 'R'],
    ['T', 'Y', 'U', 'I'],
    ['O', 'P', 'A', 'S'],
    ['D', 'F', 'G', 'H'],
    ['J', 'K', 'L', 'Ç'],
    ['Z', 'X', 'C', 'V'],
    ['B', 'N', 'M', '?'],
  ];

  const onCloseButtonClick = () => {
    setOptionsPressed(false);
    setChangeBoxPressed(false);
    setChangeKeyPressed(false);
  };
  const onChangeKeyboardLayoutClick = (model) => {
    if (model === 'qwerty') {
      setBoxes(kwert);
    }
    if (model === 'alphabetic') {
      setBoxes(alph);
    }
    onCloseButtonClick();
  };

  return (
    <Modal>
      {isNumberOfBoxesPressed ? (
        <NumberOfBoxesModal
          setEditing={setEditing}
          setNumberOfBoxesPressed={setNumberOfBoxesPressed}
          numberOfBoxes={numberOfBoxes}
          setNumberOfBoxes={setNumberOfBoxes}
        />
      ) : (
        <OptionsButtonsContainer>
          <button
            type="button"
            onClick={() => onChangeKeyboardLayoutClick('qwerty')}
          >
            QWERT
          </button>
          <button
            type="button"
            onClick={() => onChangeKeyboardLayoutClick('alphabetic')}
          >
            Alphabetic
          </button>
          <button type="button" onClick={onCloseButtonClick}>
            Return
          </button>
          <button type="button" onClick={() => setNumberOfBoxesPressed(true)}>
            Change Number of Boxes
          </button>
        </OptionsButtonsContainer>
      )}
    </Modal>
  );
}
