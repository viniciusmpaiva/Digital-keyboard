import React from 'react';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { toast } from 'react-toastify';
import history from '../../services/history';
import axios from '../../services/axios';

import {
  RegisterContainer,
  RegisterForm,
  RegisterInputContainer,
} from './styled';

export default function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post('/users/', {
        username,
        email,
        password,
      });

      toast.success('User registered successfully');
      history.push('/login');
    } catch (error) {
      const message = get(error, 'response.data.message', 'Unknown error');
      toast.error(message);
    }
  };

  return (
    <RegisterContainer>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterInputContainer>
          <label>Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </RegisterInputContainer>
        <RegisterInputContainer>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </RegisterInputContainer>
        <RegisterInputContainer>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </RegisterInputContainer>
        <button type="submit">Register</button>
      </RegisterForm>
    </RegisterContainer>
  );
}
