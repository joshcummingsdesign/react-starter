import { RequestError } from '@state/requests/types';
import { AxiosError } from 'axios';

export const isAxiosError = (error: Error | AxiosError): error is AxiosError =>
  (<AxiosError>error).response !== undefined;

export const getErrorMessage = (error: RequestError): string =>
  isAxiosError(error) && error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
