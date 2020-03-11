'use strict'

const sinon = require('sinon')
const mock = require('mock-require')
const expect = require('chai').expect

describe('Test App Helpers', function () {
  var prod = false
  var dbconfig = {}

  var initCertHelperCallback = sinon.spy()
  var initPoolHelperCallback = sinon.spy()

  var initCertHelper = { initialize: initCertHelperCallback }
  var initPoolHelper = { initialize: initPoolHelperCallback }

  mock('src/helpers/cert.helper', initCertHelper)
  mock('src/helpers/pool.helper', initPoolHelper)

  require('src/app.helpers')(prod, dbconfig)

  describe('cert.helper', function () {
    it('Check if src/helpers/cert.helper was called', function () {
      expect(initCertHelperCallback.calledOnceWith(prod)).to.equal(true)
      expect(initCertHelperCallback.getCall(0).args).to.be.an('array')
      expect(initCertHelperCallback.getCall(0).args).to.have.ordered.members([
        prod
      ])
    })
  })

  describe('pool.helper', function () {
    it('Check if src/helpers/pool.helper was called', function () {
      expect(initPoolHelperCallback.calledOnceWith(dbconfig)).to.equal(true)
      expect(initPoolHelperCallback.getCall(0).args).to.be.an('array')
      expect(initPoolHelperCallback.getCall(0).args).to.have.ordered.members([
        dbconfig
      ])
    })
  })
})
