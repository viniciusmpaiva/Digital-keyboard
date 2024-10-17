import React from 'react';
import OptionsInput from '../OptionsInput';
import NumberOfBoxesButtons from '../NumberOfBoxesButtons';
import ChangePositionButtons from '../ChangePositionButtons';
import { OptionsContainer } from './styled';

export default function Options({
  numberOfBoxes,
  setNumberOfBoxes,
  setShowKeys,
  isChangeBoxPressed,
  setChangeBoxPressed,
  isChangeKeyPressed,
  setChangeKeyPressed,
}) {
  const onPlusClick = () => {
    if (numberOfBoxes > 6) {
      return;
    }
    setNumberOfBoxes(numberOfBoxes + 1);
    setShowKeys(null);
  };
  const onMinusClick = () => {
    if (numberOfBoxes < 4) {
      return;
    }
    setNumberOfBoxes(numberOfBoxes - 1);
    setShowKeys(null);
  };
  return (
    <OptionsContainer>
      <OptionsInput numberOfBoxes={numberOfBoxes} />
      <NumberOfBoxesButtons
        onPlusClick={onPlusClick}
        onMinusClick={onMinusClick}
      />
      <ChangePositionButtons
        isChangeBoxPressed={isChangeBoxPressed}
        setChangeBoxPressed={setChangeBoxPressed}
        isChangeKeyPressed={isChangeKeyPressed}
        setChangeKeyPressed={setChangeKeyPressed}
      />
    </OptionsContainer>
  );
}
