import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState, RootAction } from '@state/root';

type ThunkArg = undefined;

export type Thunk<R = void> = ThunkAction<R, RootState, ThunkArg, RootAction>;

export type Dispatch = ThunkDispatch<RootState, ThunkArg, RootAction>;
