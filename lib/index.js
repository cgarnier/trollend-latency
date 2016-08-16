const stream = require('stream')

module.exports = class Latency extends stream.Transform {
  constructor (opts) {
    super(opts)
    this.timer = 100
  }
  _transform (data, enc, next) {
    setTimeout(() => {
      this.push(data)
      next()
    }, this.timer)
  }
  setTimer (timer) {
    this.timer = timer
    return this
  }
}
