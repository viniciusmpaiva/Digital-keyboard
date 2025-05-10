import React from 'react';
import OptionsInput from '../OptionsInput';
import NumberOfBoxesButtons from '../NumberOfBoxesButtons';
import ChangePositionButtons from '../ChangePositionButtons';
import { OptionsContainer, OptionsPopUp } from './styled';
import OptionsButtons from '../OptionsButtons';

export default function Options({
  numberOfBoxes,
  setNumberOfBoxes,
  setShowKeys,
  isChangeBoxPressed,
  setChangeBoxPressed,
  isChangeKeyPressed,
  setChangeKeyPressed,
  onSaveButtonClick,
  setOptionsPressed,
  setEditing,
}) {
  const onPlusClick = () => {
    if (numberOfBoxes > 6) {
      return;
    }
    setNumberOfBoxes(numberOfBoxes + 1);
    setEditing(true);
    setShowKeys(null);
  };
  const onMinusClick = () => {
    if (numberOfBoxes < 4) {
      return;
    }
    setNumberOfBoxes(numberOfBoxes - 1);
    setEditing(true);

    setShowKeys(null);
  };

  const onCloseButtonClick = () => {
    setOptionsPressed(false);
    setChangeBoxPressed(false);
    setChangeKeyPressed(false);
  };

  return (
    <OptionsContainer>
      <OptionsPopUp>
        <OptionsInput numberOfBoxes={numberOfBoxes} />
        <NumberOfBoxesButtons
          onPlusClick={onPlusClick}
          onMinusClick={onMinusClick}
        />
        {/* <ChangePositionButtons
          isChangeBoxPressed={isChangeBoxPressed}
          setChangeBoxPressed={setChangeBoxPressed}
          isChangeKeyPressed={isChangeKeyPressed}
          setChangeKeyPressed={setChangeKeyPressed}
        /> */}
        <OptionsButtons
          onSaveButtonClick={onSaveButtonClick}
          onCloseButtonClick={onCloseButtonClick}
        />
      </OptionsPopUp>
    </OptionsContainer>
  );
}
