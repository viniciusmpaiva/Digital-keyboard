import React from 'react';
import { ModalContainer, ModalBackground } from './styled';

export default function Modal({ children }) {
  return (
    <ModalBackground>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackground>
  );
}
