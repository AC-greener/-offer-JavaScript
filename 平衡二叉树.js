function IsBalanced_Solution(pRoot)
{
    // write code here
    if(pRoot == null) return true
    let leftH = TreeDepth(pRoot.left)
    let rightH = TreeDepth(pRoot.right)
    let diffH = Math.abs(leftH -rightH)
    if(diffH > 1) return false
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}
function TreeDepth(root) {
  if(!root) return 0
  let left = TreeDepth(root.left)
  let right = TreeDepth(root.right)
  return (left > right) ? left + 1 : right + 1
}