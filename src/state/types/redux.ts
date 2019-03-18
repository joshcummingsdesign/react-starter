import { Component, SFC } from 'react';
import { Dispatch } from './thunk';

export interface DispatchProp {
  dispatch: Dispatch;
}

export type ReduxProps<TStateProps, TOwnProps = {}> = TStateProps & TOwnProps & DispatchProp;

export type SRC<TStateProps, TOwnProps = {}> = SFC<ReduxProps<TStateProps, TOwnProps>>;

export class ReduxComponent<TStateProps, TOwnProps = {}, TState = {}> extends Component<
  ReduxProps<TStateProps, TOwnProps>,
  TState
> {}
