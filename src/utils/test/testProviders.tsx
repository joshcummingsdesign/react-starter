import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { store } from 'state/store';
import LocaleProvider from 'views/components/providers/LocaleProvider';

export const history = createMemoryHistory();

const Providers: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <LocaleProvider>{children}</LocaleProvider>
    </Provider>
  );
};

/**
 * Render components wrapped with providers into a container which is appended to the DOM.
 */
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
