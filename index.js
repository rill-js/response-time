'use strict'

// Expose middleware.
module.exports = responseTimeSetup

/**
 * Middleware that tracks the response time of a request.
 */
function responseTimeSetup () {
  return function responseTimeMiddleware (ctx, next) {
    var start = Date.now()
    return next().then(function () {
      var delta = Math.ceil(Date.now() - start)
      ctx.res.set('X-Response-Time', delta + 'ms')
    })
  }
}
