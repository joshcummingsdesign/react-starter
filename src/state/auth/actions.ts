import auth from '@services/auth';
import { Thunk } from '../types/thunk';

export const login = (): Thunk => () => auth.login();
