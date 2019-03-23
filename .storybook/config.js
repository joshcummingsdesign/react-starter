import { configure } from '@storybook/react';
import baseDecorator from './base-decorator';

const req = require.context('@src', true, /.stories.tsx$/);

function loadStories() {
  baseDecorator();
  req.keys().forEach(req);
}

configure(loadStories, module);
