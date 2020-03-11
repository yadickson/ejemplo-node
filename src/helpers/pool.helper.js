const logger = require('src/logger')('pool')

function getPool () {
  return global.poolDataBase
}

function initialize (argv) {
  const Pool = require('pg').Pool

  const config = {
    user: argv.dbuser || 'user',
    password: argv.dbpass || 'pass',
    host: argv.dbhost || 'localhost',
    port: argv.dbport || 5432,
    database: argv.dbname || 'db',
    ssl: argv.dbssl || false
  }

  const pool = new Pool(config)

  logger.info('Creando pool de conexiones')
  logger.debug('host:', config.host)
  logger.debug('port:', config.port)
  logger.debug('db:', config.database)
  logger.debug('user:', config.user)

  global.poolDataBase = pool
}

module.exports = {
  getPool,
  initialize
}
