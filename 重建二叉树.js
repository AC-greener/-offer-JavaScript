/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length == 0 || vin.length == 0) {
      return null
    }

    //前序的第一个根节点，就是中序左右子树的分割点
    let index = vin.indexOf(pre[0])
    //中序左子树
    let left = vin.slice(0, index)
    //中序右子树
    let right = vin.slice(index + 1)

    return {
      val: pre[0],
      left: reConstructBinaryTree(pre.slice(1, index + 1), left),
      right: reConstructBinaryTree(pre.slice(index + 1), right)
    }
}