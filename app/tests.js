const test = require('tape')
const app = require('./app.js')

test('base case', function (assert) {
  assert.plan(2)

  assert.equal(app.calculateFibonacci(0), 1, '0th place should return 1')
  assert.equal(app.calculateFibonacci(1), 1, '1st place should return 1')

  assert.end()
})
