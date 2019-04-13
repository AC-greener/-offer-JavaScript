let arr = [1,2,3,2,2,2,5,4,2]
function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    let result = numbers[0]
    let times = 1
    for(let i = 1; i < numbers.length; i++) {
     if(numbers[i] == result) {
       times++
     } else if(times == 0) {
        result = numbers[i]
        times = 1
     } else {
       times--
     }
    }
    console.log(result)
    if(checkMoreThanHalf(numbers, result)) {
      return result
    } else {
      return 0
    }
}
function checkMoreThanHalf(arr, n) {
  let count = 0, isMoreThanHalf = true
  arr.forEach(item => {
    if(item === n) {
      count++
    }
  })
  console.log(count)
  if(count * 2 <= arr.length) {
    isMoreThanHalf = false
  }
  return isMoreThanHalf
}
MoreThanHalfNum_Solution(arr)