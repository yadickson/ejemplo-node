'use strict'

const fs = require('fs')
const ECKey = require('ec-key')
const constants = require('./src/constants/constants')

const key = ECKey.createECKey(constants.EC_CURVE)
var privateKey = key.toBuffer()
var publicKey = key.asPublicECKey().toBuffer()

fs.writeFileSync('./key.pem', privateKey)
fs.writeFileSync('./pub.pem', publicKey)
