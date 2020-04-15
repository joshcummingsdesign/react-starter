import { Store } from 'redux';
import { debounce } from 'lodash';
import { RequestsActionName } from 'state/requests/types';

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
 * Generate set of actions for API request
 *
 * @param type    - Expected action type
 * @param payload - Expected payload
 * @param error   - Expected error
 */
export const requestActions = <T>(type: T, payload: any, error?: any) => [
  {
    requestAction: {
      type: type,
    },
    requestId: 0,
    type: RequestsActionName.START_REQUEST,
  },
  {
    type,
    ...payload,
  },
  {
    error,
    requestId: 0,
    type: RequestsActionName.FINISH_REQUEST,
  },
];

/**
 *
 * @param store - Redux store (probably mocked)
 * @param assertions - A callback that performs assertions
 * @param wait - Amount of time in micro seconds that we should wait
 */
export const waitForStateChange = (store: Store, assertions: () => void, wait: number = 1000) => {
  return new Promise((resolve, reject) => {
    let timeout: number;
    const _assertions = debounce(() => {
      if (timeout) {
        clearTimeout(timeout);
      }

      try {
        assertions();
        resolve();
      } catch (e) {
        reject(e);
      }
    }, 100);

    timeout = window.setTimeout(() => {
      _assertions.cancel();
      reject('Timed out in waitForStateChange');
    }, wait);

    store.subscribe(_assertions);
  });
};
