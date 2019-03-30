import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { AuthConsumer } from '@components/auth/AuthProvider';

/**
 * Decorated route for protected pages.
 *
 * This component takes the same props as Route and conditionally renders the page
 * component depending on user authentication state. Unauthenticated renders are
 * redirected to the root page.
 *
 * To use this component, always pass `component` prop instead of `render` prop as this
 * component uses `render` internally.
 */
const ProtectedRoute = <T extends RouteProps>({ component: Component, ...rest }: T) => (
  <AuthConsumer>
    {({ isAuthenticated, login }) => (
      <Route
        {...rest}
        render={props => {
          if (isAuthenticated && Component) {
            return <Component {...props} />;
          } else {
            login(props.location.pathname);
          }
        }}
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
