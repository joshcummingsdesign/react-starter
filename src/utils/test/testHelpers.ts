import { RequestsActionName } from 'state/requests/types';
import { RequestError } from 'utils/error';

/**
 * Conditionally mock data based on environment.
 *
 * If CONTEXT environment variable is set to e2e,
 * data will not be mocked.
 */
export const spyOnWithContext: typeof jest.spyOn = (object: any, method: any) => {
  const instance = jest.spyOn(object, method);
  if (process.env.CONTEXT === 'e2e') {
    instance.mockRestore();
  }
  return instance as any;
};

/**
 * Generate set of actions for API request.
 */
export const requestActions = <T, R>(type: T, payload: object, error?: RequestError) => [
  {
    type: RequestsActionName.START_REQUEST,
    requestId: 0,
    requestAction: {
      type: type,
    },
  },
  {
    type,
    error,
    ...payload,
  },
  {
    type: RequestsActionName.FINISH_REQUEST,
    requestId: 0,
    error,
  },
];
