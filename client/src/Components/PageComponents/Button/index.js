import React from 'react';
import { StyledButton } from './styled';

export default function Button({
  height,
  width,
  empty,
  content,
  color,
  onclick,
  fontSize,
}) {
  return (
    <StyledButton
      onClick={onclick}
      width={width || '10%'}
      height={height || '10%'}
      color={color || 'blue'}
      empty={empty}
      fontSize={fontSize || '16px'}
    >
      {content || 'Button'}
    </StyledButton>
  );
}
