const express = require('express')
const app = express()

require('./src/app.config')(app)
require('./src/app.routes')(app)
require('./src/app.swagger')(app)

app.listen(process.env.PORT || 3000, () => {
  console.log('El servidor está inicializado en el puerto 3000')
})
