'use strict'

module.exports = function (argv) {
  require('./helpers/cert.helper').initialize(argv.prod)
  require('./helpers/pool.helper').initialize(argv)
}
