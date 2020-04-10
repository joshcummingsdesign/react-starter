import React from 'react';
import { useIntl } from 'react-intl';
import { render, testMessages } from 'utils/test';
import {
  ErrorKeys,
  isAxiosError,
  getErrorMessage,
  getErrorType,
  isErrorOfType,
  translateError,
} from '.';

const ErrorElement = ({ errorKeys, error }: { errorKeys: any; error: any }) => {
  const intl = useIntl();
  return <p data-testid='error-message'>{translateError(intl, errorKeys, error)}</p>;
};

interface IMockAxiosErrorResponse<T> {
  data?: T;
  status?: number;
  statusText?: string;
  message?: string;
  statusCode?: number;
  errorType?: string;
}

interface IMockRequestError<T> {
  message: string;
  status: number;
  response?: IMockAxiosErrorResponse<T>;
  isAxiosError?: boolean;
}

class MockAxiosError<T> extends Error {
  isAxiosError?: boolean;
  response?: IMockAxiosErrorResponse<T>;

  constructor({ message, status, isAxiosError, response }: IMockRequestError<T>) {
    super(message);
    this.isAxiosError = !!isAxiosError;
    this.response = response && { ...response, statusText: message, statusCode: status };
  }
}

const mockError = new Error('Not Found');

const mockAxiosError = (response?: IMockAxiosErrorResponse<{}>) =>
  new MockAxiosError({
    message: 'Not Found',
    status: 404,
    isAxiosError: true,
    response,
  });

describe('Error Utilities', () => {
  it('isAxiosError(): detects an axios error', () => {
    expect(isAxiosError(mockError)).toEqual(false);
    expect(isAxiosError(mockAxiosError())).toEqual(true);
  });

  it('getErrorMessage(): gets the error message', () => {
    expect(getErrorMessage(mockError)).toEqual('Not Found');
    expect(getErrorMessage(mockAxiosError())).toEqual('Not Found');
    expect(getErrorMessage(mockAxiosError({ message: 'Page Not Found' }))).toEqual(
      'Page Not Found'
    );
  });

  it('getErrorType(): gets the error type', () => {
    expect(getErrorType(mockError)).toEqual(undefined);
    expect(getErrorType(mockAxiosError())).toEqual(undefined);
    expect(getErrorType(mockAxiosError({ errorType: 'not_found_error' }))).toEqual(
      'not_found_error'
    );
  });

  it('isErrorOfType(): matches on error type', () => {
    expect(isErrorOfType('not_found_error', mockError)).toEqual(false);
    expect(isErrorOfType('not_found_error', mockAxiosError())).toEqual(false);
    expect(
      isErrorOfType('not_found_error', mockAxiosError({ errorType: 'consumer_error' }))
    ).toEqual(false);
    expect(
      isErrorOfType('not_found_error', mockAxiosError({ errorType: 'not_found_error' }))
    ).toEqual(true);
  });

  it('translateError(): translates an error message', () => {
    const errorKeys: ErrorKeys = {
      not_found_error: testMessages.message.id,
    };
    const { getByTestId } = render(
      <ErrorElement
        errorKeys={errorKeys}
        error={mockAxiosError({ message: 'Engines not found.', errorType: 'not_found_error' })}
      />
    );
    expect(getByTestId('error-message')).toHaveTextContent('This is a test message.');
  });

  it('translateError(): uses axios message if no error message to translate', () => {
    const { getByTestId } = render(
      <ErrorElement
        errorKeys={[]}
        error={mockAxiosError({ message: 'Engines not found.', errorType: 'not_found_error' })}
      />
    );
    expect(getByTestId('error-message')).toHaveTextContent('Engines not found.');
  });

  it('translateError(): falls back to default error message', () => {
    const { getByTestId } = render(
      <ErrorElement errorKeys={[]} error={mockAxiosError({ errorType: 'not_found_error' })} />
    );
    expect(getByTestId('error-message')).toHaveTextContent('Request failed. Please try again.');
  });
});
