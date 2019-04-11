//方法一
function reOrderArray(array)
{
  let result1 = [], result2 = []
  array.forEach(item => {
    if(item % 2 === 0) {   //是偶数
      result1.push(item)
    } else {
      result2.push(item)
    }
  })
  return result2.concat(result1)
}

// reOrderArray([1,2,3,4,5,6,0])
//不符合题目要求：奇数和奇数，偶数和偶数之间的相对位置不变
function reOrderArray2(array) {
  let indexStart = 0, indexEnd = array.length - 1
  while(indexStart < indexEnd) {
    while(indexStart < indexEnd && (array[indexStart] & 1) != 0) {  //直到indexStart指向偶数
      indexStart++
    }
    while(indexStart < indexEnd && (array[indexEnd] & 1) == 0) {  //直到indexStart指向奇数
      indexEnd--
    }
    if(indexStart < indexEnd) {
      let temp = array[indexStart]
      array[indexStart] = array[indexEnd]
      array[indexEnd] = temp
    }
  }
  return array
}
reOrderArray2([1,2,3,4,5,6,0])
