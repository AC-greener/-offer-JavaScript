function Find(target, array)
{
  let length = array[0].length
  if(!length) {
    return 
  }
  let row = 0, columns = length-1 //行从上往下，列从右往左
  let find = false
  while(row < length && columns >= 0) {
    if(array[row][columns] === target) {
      find = true
      break
    }else if(target < array[row][columns]) {
      columns--
    } else {
      row++
    }
  }
  console.log(find)
  return find
}
let arr = [
  [1, 2, 8],
  [2, 4, 8],
  [4, 7, 10],
]
Find(7, arr)