import { ReqeustError } from '@state/request/error/types';

export const getErrorMessage = (error: ReqeustError): string =>
  error.response && error.response.data.message ? error.response.data.message : error.message;
