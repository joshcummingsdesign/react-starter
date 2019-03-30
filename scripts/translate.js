process.env.NODE_ENV = 'development';

const fs = require('fs');
const globSync = require('glob').sync;
const mkdirpSync = require('mkdirp').sync;
const rimrafSync = require('rimraf').sync;
const babel = require('@babel/core');
const ReactIntlPlugin = require('babel-plugin-react-intl').default;
const chalk = require('chalk');
const _ = require('lodash');

const LOCALE_DIR = './src/locale';
const DATA_DIR = `${LOCALE_DIR}/localeData`;
const DATA_FILE = `${DATA_DIR}/data.json`;
const EN_FILE = `${LOCALE_DIR}/en.json`;
const MESSAGE_PATTERN = './src/**/*.{ts,tsx}';
const FILE_PATTERN = `${LOCALE_DIR}/*.json`;

// Create localeData directory
mkdirpSync(DATA_DIR);

// Delete data.json file
rimrafSync(DATA_FILE);

// Aggregate default messages
const allMessages = {};
globSync(MESSAGE_PATTERN).map(filename => {
  const result = babel.transformFileSync(filename, {
    presets: ['react-app'],
    plugins: [ReactIntlPlugin]
  });
  const { messages } = result.metadata['react-intl'];
  if (messages.length) {
    messages.map(({ id, defaultMessage }) => {
      if (allMessages.hasOwnProperty(id)) {
        console.log(chalk.red(`Duplicate message id: ${id}`));
      } else {
        allMessages[id] = defaultMessage;
      }
    });
  }
});

// Write aggregated default messages to an en.json file
fs.writeFileSync(EN_FILE, JSON.stringify(allMessages, null, 2) + '\n');

// Aggregate data from all [lang].json files
const mergedTranslations = globSync(FILE_PATTERN)
  .map(filename => {
    const locale = _.last(filename.split('/')).split('.json')[0];
    return { [locale]: JSON.parse(fs.readFileSync(filename, 'utf8')) };
  })
  .reduce((acc, localeObj) => {
    return Object.assign({}, acc, localeObj);
  }, {});

// Write data from all regions to a data.json file
fs.writeFileSync(DATA_FILE, JSON.stringify(mergedTranslations, null, 2) + '\n');
