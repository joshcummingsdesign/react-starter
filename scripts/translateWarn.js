const chalk = require('chalk');

const message = 'Remember to run yarn translate before committing your changes!';
console.log(chalk.yellow(message));
setTimeout(() => {}, 2000);
