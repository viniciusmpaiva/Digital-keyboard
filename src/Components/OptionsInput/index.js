import React from 'react';
import { OptionsInputContainer } from './styled';

export default function OptionsInput({ numberOfBoxes }) {
  return (
    <OptionsInputContainer>
      <label htmlFor="number">KEY BOXES: </label>
      <input type="number" value={numberOfBoxes} max={7} min={3} />
    </OptionsInputContainer>
  );
}
