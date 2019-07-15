//树的深度为左子树深度+1和右子树深度+1中的较大值
function TreeDepth(root) {
  if(!root) return 0
  let left = TreeDepth(root.left)
  let right = TreeDepth(root.right)
  return (left > right) ? left + 1 : right + 1
}