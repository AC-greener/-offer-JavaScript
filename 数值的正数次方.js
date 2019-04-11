function Power(base, exponent) {
  // write code here
  if (base == 0) return 0
  if (exponent == 0) return 1
  let result = 1.0
  for (let i = 1; i <= Math.abs(exponent); i++) {
    result *= base
  }
  if (exponent < 0) {
    // console.log(1 / result)
    return 1 / result
  } else {
    // console.log(result)
    return result
  }
}
Power(2, 4)