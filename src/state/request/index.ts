import { LoadingState } from './loading';
import { ErrorState } from './error';

export interface RequestState {
  loading: LoadingState;
  error: ErrorState;
}
