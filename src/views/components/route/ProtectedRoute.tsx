import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import store from '@state/store';
import { isAuthenticated } from '@src/state/auth/selectors';

const isLoggedIn = () => isAuthenticated(store.getState().auth);

/** Decorated route for protected pages.
 *
 * This component takes the same props as Route and conditionally renders the page
 * component depending on user authentication state. Unauthenticated renders are
 * redirected to the root page.
 *
 * To use this component, always pass `component` prop instead of `render` prop as this
 * component uses `render` internally.
 */
const ProtectedRoute = <T extends RouteProps>({ component: Component, ...rest }: T) => (
  <Route
    {...rest}
    render={props => (isLoggedIn() && Component ? <Component {...props} /> : <Redirect to='/' />)}
  />
);

export default ProtectedRoute;