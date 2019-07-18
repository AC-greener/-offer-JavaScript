let stack = []
let minStack = []
function push(node)
{
  stack.push(node)
  if(minStack.length == 0 || node < minStack[minStack.length - 1]) {
    minStack.push(node)
  } else {
    minStack.push(minStack[minStack.length - 1])
  }
}
function pop()
{
    // write code here
    stack.pop()
    minStack.pop()
}
function top()
{
    // write code here
    return stack[stack.length - 1]
}
function min()
{
    // write code here
    return minStack[minStack.length - 1]
}