const logger = require('src/logger')('pool')

function getPool () {
  return global.poolDataBase
}

function initialize (dbconfig) {
  const Pool = require('pg').Pool
  const pool = new Pool(dbconfig)

  logger.info('Creando pool de conexiones')
  logger.debug('host:', dbconfig.host)
  logger.debug('port:', dbconfig.port)
  logger.debug('db:', dbconfig.database)
  logger.debug('user:', dbconfig.user)

  global.poolDataBase = pool
}

module.exports = {
  getPool,
  initialize
}
