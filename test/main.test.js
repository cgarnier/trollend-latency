
const Latency = require('../lib/index')
const streamify = require('stream-array')
const concat = require('concat-stream')
const assert = require('chai').assert
const os = require('os')

let sample = [{a: 1}, {a: 2}, {a: 1}, {a: 3}, {a: 3}, {a: 4}, {a: 1}, {a: 5}, {a: 1}, {a: 5}]

let logs = []
function logFn (chunk) {
  console.log(chunk)
  logs.push(chunk)
}
describe('Latency', () => {
  it('Should consume streams in about 1.5 min (150 per chunk * 10)', (done) => {
    let start = new Date().getTime()
    logs = []
    streamify(sample)
      .pipe(new Latency({objectMode: true})
        .setTimer(150)
      )
      .pipe(concat((data) => {
        let time = (new Date().getTime() - start) / 1000
        assert.isAtLeast(time, 1.5, 'length dont match')
        done()
      }))
  })
})
