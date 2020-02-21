const NodeCache = require('node-cache')
const Cache = new NodeCache({ stdTTL: 100, checkperiod: 120 })
const constants = require('../constants/constants')

function getPrivateKey () {
  return Cache.get(constants.PRIVATE_KEY)
}

function getPublicKey () {
  return Cache.get(constants.PUBLIC_KEY)
}

function initialize (production) {
  var privateKey = null
  var publicKey = null

  if (production) {
    const fs = require('fs')

    privateKey = fs.readFileSync('./key.pem')
    publicKey = fs.readFileSync('./pub.pem')
  } else {
    const ECKey = require('ec-key')
    const key = ECKey.createECKey(constants.EC_CURVE)

    privateKey = key.toBuffer()
    publicKey = key.asPublicECKey().toBuffer()
  }

  Cache.set(constants.PRIVATE_KEY, privateKey)
  Cache.set(constants.PUBLIC_KEY, publicKey)
}

module.exports = {
  getPrivateKey: getPrivateKey,
  getPublicKey: getPublicKey,
  initialize: initialize
}
