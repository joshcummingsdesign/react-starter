import { SFC, Component } from 'react';
import { Dispatch } from './thunk';

export interface DispatchProp {
  dispatch: Dispatch;
}

export type ReduxProps<TOwnProps = {}, TStateProps = {}> = TOwnProps & TStateProps & DispatchProp;

// Stateless Redux Component
export type SRC<TOwnProps = {}, TStateProps = {}> = SFC<ReduxProps<TOwnProps, TStateProps>>;

export class ReduxComponent<TOwnProps = {}, TStateProps = {}, TState = {}> extends Component<
  ReduxProps<TOwnProps, TStateProps>,
  TState
> {}
