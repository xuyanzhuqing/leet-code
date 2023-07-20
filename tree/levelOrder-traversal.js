// 前序遍历 root left right
const { tree } = require('./tree.js')

function levelOrderTraversal(root) {
  const queue = []

  if (root) {
    queue.push(root)
  }

  var curr
  while (queue.length > 0) {
    curr = queue.shift()
    console.info(curr.val)
    if (curr.left) {
      queue.push(curr.left)
    }
    if (curr.right) {
      queue.push(curr.right)
    }
  }
}

levelOrderTraversal(tree)