/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
  if(root === null) return []
  let queue = [], result = []
  queue.push(root)
  while(queue.length != 0) {
      let node = queue.shift() //出队
      result.push(node.val)
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
  }

  return result
}