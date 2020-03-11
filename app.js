'use strict'

const express = require('express')
const app = express()
const argv = require('yargs').argv

const mode = argv.prod ? 'production' : 'develop'
const port = argv.port || 3000
const context = argv.context || ''

require('app-module-path').addPath(__dirname)

require('src/app.logger')(argv)
require('src/app.helper')(argv)
require('src/app.config')(context, app)
require('src/app.routes')(context, app)
require('src/app.handler')(app)

const logger = require('src/logger')('app')

app.listen(port, () => {
  logger.info(
    `El servidor está inicializado en el puerto ${port} en modo ${mode}`
  )
})
