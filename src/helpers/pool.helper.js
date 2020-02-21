const NodeCache = require('node-cache')
const Cache = new NodeCache({ stdTTL: 100, checkperiod: 120 })
const Pool = require('pg').Pool
const constants = require('../constants/constants')

function getPool () {
  return Cache.get(constants.POOL_CONNECTION)
}

function initialize (argv) {
  const config = {
    user: argv.dbuser || 'user',
    password: argv.dbpass || 'pass',
    host: argv.dbhost || 'localhost',
    port: argv.dbport || 5432,
    database: argv.dbname || 'db',
    ssl: argv.dbssl || false
  }

  const pool = new Pool(config)

  Cache.set(constants.POOL_CONNECTION, pool)
}

module.exports = {
  getPool,
  initialize
}
