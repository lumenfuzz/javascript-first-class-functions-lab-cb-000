function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return (n) => {return multiplierValue * n}
}

function multiplier(multiplierValue, value) {
  return multiplierValue * value
}

var doubler = createMultiplier(2).bind()

var tripler = createMultiplier(3)
