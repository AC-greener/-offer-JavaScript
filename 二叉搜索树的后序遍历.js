/*
左子树比根节点小，右子树比根节点大
思路： 1，找到根节点（数组的最后一个元素）
2，从前往后找小于根节点的数组left， 为左子树， 剩下的数组right为右子树
3，判断右子树是否符合条件
4，回到第一步判断数组left，数组right
*/

function VerifySquenceOfBST(sequence)
{
  let length = sequence.length
  return helper(sequence, length)
    // write code here
}
function helper(sequence, length) {
  if(!length) return false

  let root = sequence[length - 1]
  let i = 0 
  //左子树的节点小于根节点
  for(; i < length - 1; i++) {
    if(sequence[i] > root) {
      break
    }
  }

  //右子树的节点大于根节点
  let j = i
  for(; j < length - 1; j++) {
    if(sequence[j] < root) {
      return false
    }
  }
  //判断左子树是不是二叉搜索树
  let left = true
  if(i > 0) left = helper(sequence, i)
  //判断右子树
  let right = true
  if(i < length - 1) right = helper(sequence.slice(i), length - i - 1)
  return (left && right)
}
