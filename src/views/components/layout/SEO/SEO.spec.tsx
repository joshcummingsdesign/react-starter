import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitFor } from 'utils/test';
import SEO from '.';

const history = createMemoryHistory();

const renderComponent = (title?: string, description?: string) =>
  render(
    <Router history={history}>
      <SEO title={title} description={description} />
    </Router>
  );

describe('SEO', () => {
  it('renders the default title and description', async () => {
    renderComponent();
    await waitFor(() => {
      expect(document.title).toEqual('React Starter');
      let meta = document.querySelector('[name=description]') as any;
      expect(meta.content).toEqual(
        'A pleasant little starter project bootstrapped with Create React App.'
      );
    });
  });

  it('renders the title and description', async () => {
    renderComponent('Page Not Found', 'The page could not be found.');
    await waitFor(() => {
      expect(document.title).toEqual('Page Not Found | React Starter');
      let meta = document.querySelector('[name=description]') as any;
      expect(meta.content).toEqual('The page could not be found.');
    });
  });
});
