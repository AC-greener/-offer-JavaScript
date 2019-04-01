function toBinary(number) {
  if (number === 1) {
    return '01'
  }
  let arr = [],
    i = 0
  while (true) {
    if (number) {
      arr[i++] = number % 2
      number = parseInt(number / 2)
    } else {
      arr[i] = 0
      break
    }
  }
  return arr.reverse().join('')
}