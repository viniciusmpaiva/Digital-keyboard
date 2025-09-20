import React from 'react';
import { HeaderContainer, HeaderOption } from './styled';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderOption>Home</HeaderOption>
      <HeaderOption>Tutorial</HeaderOption>
      <HeaderOption>About</HeaderOption>
      <HeaderOption>Contact</HeaderOption>
    </HeaderContainer>
  );
}
