var inStack = [],
  outStack = [];

function push(node) {
  // write code here
  inStack.push(node);
}

function pop() {
  // write code here
  if (!outStack.length) {  //如果outStack里面的没有元素， 则吧inStack里面的元素放到outStack里面
    while (inStack.length) {
      outStack.push(inStack.pop());
    }
  }
  return outStack.pop();
}