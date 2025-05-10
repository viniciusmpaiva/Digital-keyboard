import React from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

// import {LoginForm} from '../../../components/login-form'

import { LoginContainer, InputContainer, LoginForm } from './styled';
import * as actions from '../../store/Modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <button type="submit">Login</button>
      </LoginForm>
    </LoginContainer>
  );
}
