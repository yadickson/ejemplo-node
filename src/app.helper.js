'use strict'

module.exports = function (argv) {
  require('src/helpers/cert.helper').initialize(argv.prod)
  require('src/helpers/pool.helper').initialize(argv)
}
