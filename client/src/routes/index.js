import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../Pages/Home/index';
import Keyboard from '../Pages/Keyboard/index';
import Page404 from '../Pages/Page404/index';
import PrivateRoute from './PrivateRoute';
import Login from '../Pages/Login/index';
import Register from '../Pages/Register/index';
import ProfilesPage from '../Pages/ProfilesPage/index';

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/keyboard" exact component={Keyboard} />
      <PrivateRoute path="/login" exact component={Login} />
      <PrivateRoute path="/register" exact component={Register} />
      <PrivateRoute path="/profiles" exact component={ProfilesPage} />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
