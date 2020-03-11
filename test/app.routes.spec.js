'use strict'

const sinon = require('sinon')
const mock = require('mock-require')
const expect = require('chai').expect

describe('Test App Routes', function () {
  var context = ''
  var app = {}

  var initAuthRoute = sinon.spy()
  var initBaseRoute = sinon.spy()
  var initOneRoute = sinon.spy()

  mock('src/routes/auth.routes', initAuthRoute)
  mock('src/routes/base.routes', initBaseRoute)
  mock('src/routes/one.routes', initOneRoute)

  require('src/app.routes')(context, app)

  describe('auth.routes', function () {
    it('Check if src/routes/auth.routes was called', function () {
      expect(initAuthRoute.calledOnceWith(context, app)).to.equal(true)
      expect(initAuthRoute.getCall(0).args).to.be.an('array')
      expect(initAuthRoute.getCall(0).args).to.have.ordered.members([context, app])
    })
  })

  describe('base.routes', function () {
    it('Check if src/routes/base.routes was called', function () {
      expect(initBaseRoute.calledOnceWith(context, app)).to.equal(true)
      expect(initBaseRoute.getCall(0).args).to.be.an('array')
      expect(initBaseRoute.getCall(0).args).to.have.ordered.members([context, app])
    })
  })

  describe('one.routes', function () {
    it('Check if src/routes/one.routes was called', function () {
      expect(initOneRoute.calledOnceWith(context, app)).to.equal(true)
      expect(initOneRoute.getCall(0).args).to.be.an('array')
      expect(initOneRoute.getCall(0).args).to.have.ordered.members([context, app])
    })
  })
})
