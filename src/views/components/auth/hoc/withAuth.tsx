import React, { ComponentType } from 'react';
import { Subtract } from 'utility-types';
import { AuthConsumer, AuthProps } from '@components/auth/AuthProvider';

export const withAuth = <P extends AuthProps>(WrappedComponent: ComponentType<P>) => (
  props: Subtract<P, AuthProps>
) => <AuthConsumer>{auth => <WrappedComponent {...props as P} {...auth} />}</AuthConsumer>;

export default withAuth;
