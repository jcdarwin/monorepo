'use strict';

const chalk = require('chalk')
const components = require('components')

function webapp() {
  console.log(chalk.green('here is the webapp'))
  console.log(chalk.yellow(components()))

  return 'it worked!'
}

webapp()

module.exports = webapp
