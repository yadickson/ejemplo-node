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
  logger.info('host:', config.host)
  logger.info('port:', config.port)
  logger.info('db:', config.database)
  logger.info('user:', config.user)

  global.poolDataBase = pool
}

module.exports = {
  getPool,
  initialize
}
