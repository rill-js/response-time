'use strict'

var Rill = require('rill')
var request = require('supertest')
var responseTime = require('..')

describe('responseTime()', function () {
  it('should set the response time', function (done) {
    var app = new Rill()

    app.use(responseTime())

    app.use(function (ctx, next) {
      return next()
    })

    request(app.listen())
    .get('/')
    .expect('X-Response-Time', /\d+ms/)
    .end(done)
  })
})
