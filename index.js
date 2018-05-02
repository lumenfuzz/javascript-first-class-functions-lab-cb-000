function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return (n) => {multiplierValue * n}
}

function multiplier() {

}
