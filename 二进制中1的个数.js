function NumberOf1(n)
{
  var flag = 1, result = 0
  while(flag) {
    if(n & flag) {
      result++
    }
    flag = flag << 1
  }
  return result
}