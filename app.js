'use strict'

const express = require('express')
const app = express()
const argv = require('yargs').argv

const mode = process.env.PROD || argv.prod ? 'production' : 'develop'
const port = process.env.PORT || argv.port || 3000
const context = process.env.CTX || argv.context || ''

const dbconfig = {
  host: process.env.DBHOST || argv.dbhost || 'localhost',
  port: process.env.DBPORT || argv.dbport || 5432,
  user: process.env.DBUSER || argv.dbuser || 'user',
  password: process.env.DBPASS || argv.dbpass || 'pass',
  database: process.env.DBNAME || argv.dbname || 'db',
  ssl: process.env.DBSSL || argv.dbssl || false
}

require('app-module-path').addPath(__dirname)

require('src/app.logger')(argv)
require('src/app.helpers')(mode === 'production', dbconfig)
require('src/app.config')(context, app)
require('src/app.routes')(context, app)
require('src/app.handler')(app)

const logger = require('src/logger')('app')

app.listen(port, () => {
  logger.info(
    `El servidor está inicializado en el puerto ${port} en modo ${mode}`
  )
})
