import { AxiosError, AxiosResponse } from 'axios';
import { IntlShape } from 'react-intl';
import { errorMessages } from '.';

interface IBackendError extends AxiosError {
  response?: AxiosResponse<object> & {
    message?: string;
    statusCode?: number;
    errorType?: string;
  };
}

export type RequestError = Error | IBackendError;

export type ErrorKeys = { [errorType: string]: string };

export const isAxiosError = (error: RequestError): error is IBackendError =>
  !!(error as IBackendError).isAxiosError;

export const getErrorMessage = (error: RequestError) =>
  isAxiosError(error) && error.response && error.response.message
    ? error.response.message
    : error.message;

export const getErrorType = (error: RequestError) =>
  isAxiosError(error) && error.response && error.response.errorType
    ? error.response.errorType
    : undefined;

export const isErrorOfType = (type: string, error: RequestError) => getErrorType(error) === type;

export const getErrorStatus = (error: RequestError) =>
  isAxiosError(error) && error.response && error.response.status
    ? error.response.status
    : undefined;

export const isErrorOfStatus = (status: number, error: RequestError) =>
  getErrorStatus(error) === status;

export const translateError = (intl: IntlShape, errorKeys: ErrorKeys, error?: RequestError) => {
  if (error) {
    const errorType = getErrorType(error);

    if (errorType && errorKeys[errorType]) {
      return intl.formatMessage({ id: errorKeys[errorType] });
    } else if (isAxiosError(error) && error.response && error.response.message) {
      return error.response.message;
    } else {
      return intl.formatMessage(errorMessages.server);
    }
  }
};
