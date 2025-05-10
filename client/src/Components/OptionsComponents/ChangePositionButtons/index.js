import React from 'react';
import { CiLock, CiUnlock } from 'react-icons/ci';
import { ChangePositionButtonsContainer } from './styled';

export default function ChangePositionButtons({
  isChangeBoxPressed,
  isChangeKeyPressed,
  setChangeBoxPressed,
  setChangeKeyPressed,
}) {
  return (
    <ChangePositionButtonsContainer>
      <button
        type="button"
        className={isChangeBoxPressed ? 'pressed' : ''}
        onClick={() => {
          setChangeBoxPressed(!isChangeBoxPressed);
          setChangeKeyPressed(false);
        }}
      >
        <CiLock />
        BOX
      </button>
      <button
        type="button"
        onClick={() => {
          setChangeKeyPressed(!isChangeKeyPressed);
          setChangeBoxPressed(false);
        }}
        className={isChangeKeyPressed ? 'pressed' : ''}
      >
        <CiLock />
        KEY
      </button>
    </ChangePositionButtonsContainer>
  );
}
