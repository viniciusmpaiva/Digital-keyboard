import React from 'react';

import { FaRegSave } from 'react-icons/fa';
import { OptionsButtonsContainer } from './styled';

export default function OptionsButtons({
  onSaveButtonClick,
  onCloseButtonClick,
}) {
  return (
    <OptionsButtonsContainer>
      <button type="button" className="saveButton" onClick={onSaveButtonClick}>
        <FaRegSave />
      </button>
      <button
        type="button"
        className="closeButton"
        onClick={onCloseButtonClick}
      >
        Close
      </button>
    </OptionsButtonsContainer>
  );
}
