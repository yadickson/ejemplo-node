const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(bodyParser.json())

app.listen(process.env.PORT || 3000, () => {
  console.log('El servidor está inicializado en el puerto 3000')
})

var routes = require('./src/app.routes')
routes(app)

app.get('/', function (req, res) {
  res.send('Saludos desde express')
})

app.get('/hola', function (req, res) {
  const params = req.query
  console.log(params)
  res.send('Hola ' + req.body)
})
