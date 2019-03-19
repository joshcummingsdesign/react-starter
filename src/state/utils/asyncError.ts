import { ReqeustError } from '@state/requests/types';

export const getErrorMessage = (error: ReqeustError): string =>
  error.response && error.response.data.message ? error.response.data.message : error.message;
