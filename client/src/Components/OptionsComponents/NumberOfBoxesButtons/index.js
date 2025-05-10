import React from 'react';
import { NumberOfBoxesButtonsContainer } from './styled';

export default function NumberOfBoxesButtons({ onPlusClick, onMinusClick }) {
  return (
    <NumberOfBoxesButtonsContainer>
      <button type="button" onClick={() => onPlusClick()}>
        +
      </button>
      <button type="button" onClick={() => onMinusClick()}>
        -
      </button>
    </NumberOfBoxesButtonsContainer>
  );
}
