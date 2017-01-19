const test = require('tape')
const app = require('./app.js')

test('base case', function (assert) {
  assert.plan(6)

  assert.equal(app.calculateFibonacci(0), 0, '0th place should return 0')
  assert.equal(app.calculateFibonacci(1), 1, '1st place should return 1')
  assert.equal(app.calculateFibonacci(2), 1, '2nd place should return 1')
  assert.equal(app.calculateFibonacci(3), 2, '3rd place should return 2')
  assert.equal(app.calculateFibonacci(4), 3, '4th place should return 3')
  assert.equal(app.calculateFibonacci(10), 55, '10th place should return 55')

  assert.end()
})

test('edge case', function (assert) {
  assert.plan(1)

  assert.notOk(app.calculateFibonacci(-1), 'negative number isn\'t truthy')

  assert.end()
})
