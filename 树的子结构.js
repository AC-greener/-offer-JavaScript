/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    let result = false
    if(pRoot1 != null && pRoot2 != null) {
      if(pRoot1.val === pRoot2.val) {
        result = doesTree1HaveTree2(pRoot1, pRoot2)
      }
      //现在左子树找
      if(!result) result = HasSubtree(pRoot1.left, pRoot2)
      if(!result) result = HasSubtree(pRoot1.right, pRoot2)
    }
    return result
}
//递归的定义：判断树A是否包含树B
//递归的出口：到达了树A或者树B的叶子节点
function doesTree1HaveTree2(root1, root2) {
  if(root2 == null) {
    return true
  }
  if(root1 == null) {
    return false
  }
  if(root1.val != root2.val) {
    return false
  }
  return doesTree1HaveTree2(root1.left, root2.left) && doesTree1HaveTree2(root1.right, root2.right)
}