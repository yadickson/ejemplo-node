var assert = require('assert')

var sinon = require('sinon')
var mock = require('mock-require')

describe('Test App Routes', function () {
  var app = {}

  var initAuthRoute = sinon.fake()
  var initBaseRoute = sinon.fake()
  var initOneRoute = sinon.fake()

  mock('../src/routes/auth.routes', { initialize: initAuthRoute })
  mock('../src/routes/base.routes', { initialize: initBaseRoute })
  mock('../src/routes/one.routes', { initialize: initOneRoute })

  const appRoutes = require('../src/app.routes')
  appRoutes(app)

  describe('auth.routes', function () {
    it('Check if ./routes/auth.routes was called', function () {
      initAuthRoute.calledOn(app)
    })
  })

  describe('base.routes', function () {
    it('Check if ./routes/base.routes was called', function () {
      initBaseRoute.calledOn(app)
    })
  })

  describe('one.routes', function () {
    it('Check if ./routes/one.routes was called', function () {
      initOneRoute.calledOn(app)
    })
  })
})
