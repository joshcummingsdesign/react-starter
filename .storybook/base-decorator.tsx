import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

export default () => {
  addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      <Fragment>{story()}</Fragment>
    </MemoryRouter>
  ));
};
