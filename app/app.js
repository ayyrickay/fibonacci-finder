module.exports = {
  calculateFibonacci: function (n, sequence) {
    'use strict'
    let fibonacciSequence = sequence || []
    if (n < 0) {
      return false
    }
    for (var i = 0; i < n + 1; i++) {
      if (i < 2) {
        fibonacciSequence.push(1)
      } else {
        const lastNumber = fibonacciSequence[i - 1]
        const penultimateNumber = fibonacciSequence[i - 2]
        fibonacciSequence.push(lastNumber + penultimateNumber)
      }
    }
    return fibonacciSequence[n]
  }
}
