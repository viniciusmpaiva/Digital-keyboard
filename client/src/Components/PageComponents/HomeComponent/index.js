import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { LoginComponentsButton, LoginContainer } from './styled';

export default function LoginComponents() {
  return (
    <LoginContainer>
      <Link to="/login">
        <LoginComponentsButton>Login</LoginComponentsButton>
      </Link>
      <Link to="/register">
        <LoginComponentsButton>Register</LoginComponentsButton>
      </Link>
    </LoginContainer>
  );
}
