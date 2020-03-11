const logger = require('src/logger')('cert')
const constants = require('src/constants/constants')

function getPrivateKey () {
  return global.privateKey
}

function getPublicKey () {
  return global.publicKey
}

function initialize (production) {
  var privateKey = null
  var publicKey = null

  if (production) {
    logger.info('Iniciando creacion de certificado en modo produccion')
    const fs = require('fs')

    privateKey = fs.readFileSync('./key.pem')
    publicKey = fs.readFileSync('./pub.pem')
  } else {
    logger.info('Iniciando creacion de certificado en modo desarrollo')
    const ECKey = require('ec-key')
    const key = ECKey.createECKey(constants.EC_CURVE)

    privateKey = key.toBuffer()
    publicKey = key.asPublicECKey().toBuffer()
  }

  global.privateKey = privateKey
  global.publicKey = publicKey
}

module.exports = {
  getPrivateKey,
  getPublicKey,
  initialize
}
