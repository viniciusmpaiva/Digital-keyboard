import React from 'react';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import AuthForm from '../../Components/PageComponents/AuthForm';
import * as actions from '../../store/Modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const loginFields = [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true,
      autoComplete: 'email',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      required: true,
      autoComplete: 'current-password',
    },
  ];

  const handleLogin = async (formData) => {
    dispatch(
      actions.loginRequest({
        email: formData.email,
        password: formData.password,
        prevPath,
      })
    );
  };

  return (
    <AuthForm
      title="Login"
      fields={loginFields}
      onSubmit={handleLogin}
      buttonText="Login"
    />
  );
}
