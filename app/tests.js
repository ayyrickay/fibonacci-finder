const test = require('tape')
const app = require('./app.js')

test('sequence is correct', function (assert) {
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

test('can return n fibonacci numbers', function (assert) {
  assert.plan(2)
  assert.same(app.findMultipleFibonacci(0, 5), [0, 5], '0th and 5th places should return 0 and 5')
  assert.same(app.findMultipleFibonacci(1, 10, 2), [1, 55, 1], '1st, 10th, and 2nd places should return 1, 55, and 1')

  assert.end()
})
