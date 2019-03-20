import { configure } from '@storybook/react';
import baseDecorator from './base-decorator';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  baseDecorator();
  req.keys().forEach(req);
}

configure(loadStories, module);
