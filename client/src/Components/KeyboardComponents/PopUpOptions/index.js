import React from 'react';

import {
  PopUpOptionsContainer,
  PopUpOptionsButton,
  PopUpOptionsButtonContainer,
  InputPopUpOptions,
} from './styled';

export default function PopUpOptions({
  text,
  inputRef,
  setShowKeys,
  handleDelete,
}) {
  return (
    <PopUpOptionsContainer>
      <InputPopUpOptions type="text" value={text} autoFocus ref={inputRef} />
      <PopUpOptionsButtonContainer>
        <PopUpOptionsButton onClick={handleDelete}>DELETE</PopUpOptionsButton>
        <PopUpOptionsButton onClick={() => setShowKeys(null)}>
          RETURN
        </PopUpOptionsButton>
      </PopUpOptionsButtonContainer>
    </PopUpOptionsContainer>
  );
}
