import React from 'react';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function RedirectRoute({
  component: Component,
  isClosed,
  ...rest
}) {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isAuthenticated) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

RedirectRoute.defaultProps = {
  isClosed: false,
};

RedirectRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
