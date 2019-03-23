import { SFC, Component } from 'react';
import { AuthProps } from '@components/auth/AuthProvider';
import { ReduxProps } from './redux';

export type AuthComponentProps<TOwnProps = {}> = TOwnProps & AuthProps;

export type ReduxAuthProps<TOwnProps = {}, TStateProps = {}> = ReduxProps<TOwnProps, TStateProps> &
  AuthProps;

// Stateless Auth Component
export type SAC<TOwnProps = {}> = SFC<AuthComponentProps<TOwnProps>>;

// Stateless Redux Auth Component
export type SRAC<TOwnProps = {}, TStateProps = {}> = SFC<ReduxAuthProps<TOwnProps, TStateProps>>;

export class AuthComponent<TOwnProps = {}, TState = {}> extends Component<
  AuthComponentProps<TOwnProps>,
  TState
> {}

export class ReduxAuthComponent<TOwnProps = {}, TStateProps = {}, TState = {}> extends Component<
  ReduxAuthProps<TOwnProps, TStateProps>,
  TState
> {}
