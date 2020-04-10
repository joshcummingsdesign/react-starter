import { waitForStateChange } from '.';

describe('Test Utilities', () => {
  it('waitForStateChange(): should time out after 200ms', async () => {
    const store: any = {
      subscribe: jest.fn(),
    };

    const assertions = jest.fn();
    await expect(waitForStateChange(store, assertions, 200)).rejects.toEqual(
      'Timed out in waitForStateChange'
    );
    expect(assertions).not.toBeCalled();
  });

  it('waitForStateChange(): should call assertions after state has changed', async () => {
    const store: any = {
      subscribe: (cb: any) => {
        setTimeout(cb, 50);
      },
    };

    const assertions = jest.fn();
    await waitForStateChange(store, assertions, 200);
    expect(assertions).toBeCalledTimes(1);
  });
});
