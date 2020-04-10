import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from 'utils/test';
import { Routes } from './App';

const history = createMemoryHistory();

const renderComponent = () =>
  render(
    <Router history={history}>
      <Routes />
    </Router>
  );

describe('App', () => {
  it('renders the home page', () => {
    const { getByTestId } = renderComponent();
    getByTestId('home-page');
  });

  it('renders the 404 page', () => {
    const { getByTestId } = renderComponent();
    history.push('/404');
    getByTestId('page-not-found');
  });
});
