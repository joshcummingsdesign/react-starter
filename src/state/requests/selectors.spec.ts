import { loadingSelector, errorSelector } from './selectors';

describe('requests selectors', () => {
  const requestId = 1;
  const requestAction = { type: 'TEST_ACTION' };
  const singleRequest = { requestId, requestAction };

  it('should retrieve loading states', () => {
    const isLoading = loadingSelector([singleRequest], [requestAction.type as any]);
    const isNotLoading = loadingSelector([], [requestAction.type as any]);
    expect(isLoading).toBe(true);
    expect(isNotLoading).toBe(false);
  });

  it('should retrieve error states', () => {
    const error = errorSelector(
      [{ ...singleRequest, error: new Error() }],
      [requestAction.type as any]
    );
    const noError = errorSelector([singleRequest], [requestAction.type as any]);
    expect(error).toBeInstanceOf(Error);
    expect(noError).toBe(undefined);
  });
});
