'use strict'

const express = require('express')
const app = express()
const argv   = require('yargs').argv

const mode = argv.prod ? 'production' : 'develop'
const port = argv.port || 3000

require('./src/helpers/cert.helper').initialize(argv.prod)
require('./src/app.config')(app)
require('./src/app.routes')(app)
require('./src/app.handler')(app)

app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto ${port} en modo ${mode}`)
})
