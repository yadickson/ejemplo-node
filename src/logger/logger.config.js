'use strict'

module.exports = function (argv) {
  const log4js = require('log4js')
  log4js.configure(argv.logger || 'log4js.json')
  global.log4js = log4js
}
