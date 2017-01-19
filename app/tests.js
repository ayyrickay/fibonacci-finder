const test = require('tape')
const app = require('./app.js')

test('base case', function (assert) {
  assert.plan(1)

  assert.equal(app.calculateFibonacci(0), 1, 'should return a number')
})
