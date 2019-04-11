function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) return 0
  let index1 = 0,
    index2 = rotateArray.length - 1,
    indexMid
  while (rotateArray[index1] >= rotateArray[index2]) {
    if (index2 - index1 === 1) {
      indexMid = index2
      break
    }
    indexMid = Math.floor((index1 + index2) / 2)
    if (rotateArray[indexMid] >= rotateArray[index1]) { //说明mid指针还在左边的序列
      index1 = indexMid
    } else if (rotateArray[indexMid] <= rotateArray[index2]) { //在右边序列
      index2 = indexMid
    }
  }
  return rotateArray[indexMid]
}