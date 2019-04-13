function find1(n) {
  let count = 0
  while(n) {
    if(n % 10 === 1) {
      count++
    }
    n = Math.floor(n / 10)
  }
  return count
}
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    let count = 0
    for(let i = 1; i <= n; i++) {
      count += find1(i)
    }
    return count
}
