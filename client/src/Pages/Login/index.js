import React from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

// import {LoginForm} from '../../../components/login-form'

import { LoginContainer, InputContainer } from './styled';
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
      {/* <LoginForm onSubmit={handleSubmit} className={["w-2xl"]}/> */}
    </LoginContainer>
  );
}
