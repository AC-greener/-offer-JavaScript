function FindNumsAppearOnce(array) {
  let temp = 0 //这个结果的二进制中至少有一位是1
  for (let i = 0; i < array.length; i++) {
    temp ^= array[i]
  }
  let firstIndex1 = 0 //以这个索引将array划分为两个子数组
  while ((temp & 1) == 0) {  //从右往左找第一次出现1的下标
    temp = temp >> 1;
    ++firstIndex1;
  }
  let arr1 = [],
    arr2 = []
  // console.log(firstIndex1)
  array.forEach(value => {
    if (isBit(value, firstIndex1)) {
      arr1.push(value)
    } else {
      arr2.push(value)
    }
  })
  let result1 = 0,
    result2 = 0
  arr1.forEach(item => {
    result1 ^= item
  })
  arr2.forEach(item => {
    result2 ^= item
  })
  // console.log(result1, result2) 
  return [result1, result2]

}

function isBit(number, index) {
  number = number >> index
  return number & 1
}


FindNumsAppearOnce([1, 1, 2, 2, 5, 6, 3, 3])