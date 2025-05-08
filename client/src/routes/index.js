import React from 'react';
import { Switch } from 'react-router-dom';

import { toast } from 'react-toastify';
import Home from '../Pages/Home/index';
import Keyboard from '../Pages/Keyboard/index';
import Page404 from '../Pages/Page404/index';
import PrivateRoute from './PrivateRoute';
import Login from '../Pages/Login/index';
import Register from '../Pages/Register/index';

export default function Routes() {
  toast.success('Welcome to the app!');

  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/keyboard" exact component={Keyboard} />
      <PrivateRoute path="/login" exact component={Login} />
      <PrivateRoute path="/register" exact component={Register} />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
