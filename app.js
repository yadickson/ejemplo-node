'use strict'

const express = require('express')
const app = express()

const mode = process.env.NODE_ENV === 'production'
const port = mode ? 80 : process.env.PORT || 3000

require('./src/helpers/cert.helper').initialize(mode)
require('./src/app.config')(app)
require('./src/app.routes')(app)
require('./src/app.handler')(app)

app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto ${port}`)
})
