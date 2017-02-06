module.exports = {
  calculateFibonacci: function (n) {
    'use strict'
    let fibonacciSequence = []

    if (n < 0) {
      return false
    }
    for (let i = 0; i < n + 1; i++) {
      if (i < 2) {
        fibonacciSequence.push(i)
      } else {
        const lastNumber = fibonacciSequence[i - 1]
        const penultimateNumber = fibonacciSequence[i - 2]
        fibonacciSequence.push(lastNumber + penultimateNumber)
      }
    }

    return fibonacciSequence[n]
  },

  calculateFibonacciArray: function (n) {
    'use strict'
    let fibonacciSequence = []

    if (n < 0) {
      return false
    }
    for (let i = 0; i < n + 1; i++) {
      if (i < 2) {
        fibonacciSequence.push(i)
      } else {
        const lastNumber = fibonacciSequence[i - 1]
        const penultimateNumber = fibonacciSequence[i - 2]
        fibonacciSequence.push(lastNumber + penultimateNumber)
      }
    }

    return fibonacciSequence
  },

  findMultipleFibonacci: function () {
    const values = Object.keys(arguments).map((key) => {
      return arguments[key]
    })

    var n = Math.max(...values)

    const fibonacciSequence = this.calculateFibonacciArray(n)

    let returnArray = []
    for (let i = 0; i < arguments.length; i++) {
      returnArray.push(fibonacciSequence[arguments[i]])
    }

    if (returnArray.length === 1) {
      return returnArray[0]
    } else {
      return returnArray
    }
  }
}
