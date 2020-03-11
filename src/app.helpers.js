'use strict'

module.exports = function (prod, dbconfig) {
  require('src/helpers/cert.helper').initialize(prod)
  require('src/helpers/pool.helper').initialize(dbconfig)
}
