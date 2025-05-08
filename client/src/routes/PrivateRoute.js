import React from 'react';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

export default function RedirectRoute({
  component: Component,
  isClosed,
  ...rest
}) {
  const isAuthenticated = false;

  if (isClosed && !isAuthenticated) {
    return (
      <Redirect
        to={{ pathname: '/', state: { prevPath: rest.location.pathname } }}
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
