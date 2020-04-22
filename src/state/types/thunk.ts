import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState, RootAction } from 'state/root';

export type Thunk<R = void, E = undefined> = ThunkAction<R, RootState, E, RootAction>;

export type Dispatch<E = undefined> = ThunkDispatch<RootState, E, RootAction>;
