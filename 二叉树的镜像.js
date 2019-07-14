/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
//递归的定义：求以root为根节点的镜像二叉树
//递归的出口：叶子节点
function Mirror(root)
{
  if(root != null) {
    let temp = root.left
    root.left = root.right
    root.right = temp
    if(root.left) {
      Mirror(root.left)
    }
    if(root.right) {
      Mirror(root.right)
    }
  }

}