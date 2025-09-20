import React from 'react';
import { toast } from 'react-toastify';
import history from '../../services/history';
import { digitalKeyboardBackend } from '../../services/axios';
import AuthForm from '../../Components/PageComponents/AuthForm';

export default function Register() {
  const registerFields = [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      placeholder: 'Enter your username',
      required: true,
      autoComplete: 'username',
    },
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
      autoComplete: 'new-password',
    },
  ];

  const validationRules = {
    username: [
      (value) => {
        if (value.length < 3) {
          return 'Username must be at least 3 characters long';
        }
        return null;
      },
    ],
    password: [
      (value) => {
        if (value.length < 6) {
          return 'Password must be at least 6 characters long';
        }
        return null;
      },
    ],
  };

  const handleRegister = async (formData) => {
    await digitalKeyboardBackend.post('/users', {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });

    toast.success('User registered successfully');
    history.push('/login');
  };

  return (
    <AuthForm
      title="Register"
      fields={registerFields}
      onSubmit={handleRegister}
      buttonText="Register"
      validationRules={validationRules}
    />
  );
}
