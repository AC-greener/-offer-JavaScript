/*
输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
  let stack = []  //保存路径的栈
  let currentSum = 0
  let resultList = []
  return helper(root, expectNumber, currentSum, stack, resultList)
}
function helper(root, expectNumber, currentSum, stack, resultList) {
  if(!root) return resultList 
  currentSum += root.val
  stack.push(root.val)
  //如果是叶子节点,且当前路径上的和等于expectNumber,则保存下来
  let isLeaf = root.left == null && root.right == null
  if(currentSum === expectNumber && isLeaf) {
    resultList.push(Array.of(...stack))
  }

  //如果不是叶子节点，则遍历他的子节点
  if(root.left != null) {
    helper(root.left, expectNumber, currentSum, stack, resultList)
  }
  if(root.right != null) {
    helper(root.right, expectNumber, currentSum, stack, resultList)
  }
  currentSum -= root.val
  stack.pop()
  return resultList
}