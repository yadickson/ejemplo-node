'use strict'

const sinon = require('sinon')
const mock = require('mock-require')

describe('Test App Routes', function () {
  var app = {}

  var initAuthRoute = sinon.fake()
  var initBaseRoute = sinon.fake()
  var initOneRoute = sinon.fake()

  before(() => {
    mock('../src/routes/auth.routes', initAuthRoute)
    mock('../src/routes/base.routes', initBaseRoute)
    mock('../src/routes/one.routes', initOneRoute)
    require('../src/app.routes')(app)
  })

  after(() => {
    sinon.restore()
  })

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
