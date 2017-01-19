const test = require('tape')
const app = require('./app.js')

test('base case', function (assert) {
  assert.plan(6)

  assert.equal(app.calculateFibonacci(0), 1, '0th place should return 1')
  assert.equal(app.calculateFibonacci(1), 1, '1st place should return 1')
  assert.equal(app.calculateFibonacci(2), 2, '2nd place should return 2')
  assert.equal(app.calculateFibonacci(3), 3, '3rd place should return 3')
  assert.equal(app.calculateFibonacci(4), 5, '4th place should return 5')
  assert.equal(app.calculateFibonacci(10), 89, '10th place should return 89')

  assert.end()
})

test('edge case', function (assert) {
  assert.plan(1)

  assert.notOk(app.calculateFibonacci(-1), 'negative number isn\'t truthy')

  assert.end()
})
