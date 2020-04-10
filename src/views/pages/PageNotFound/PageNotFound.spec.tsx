import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from 'utils/test';
import PageNotFound from './PageNotFoundContainer';

const history = createMemoryHistory();

const renderComponent = () =>
  render(
    <Router history={history}>
      <PageNotFound />
    </Router>
  );

describe('PageNotFound', () => {
  it('returns to the home page', () => {
    const { getByTestId } = renderComponent();
    history.replace('/404');
    expect(history.location.pathname).toEqual('/404');
    fireEvent.click(getByTestId('back-to-home'));
    expect(history.location.pathname).toEqual('/');
  });
});
