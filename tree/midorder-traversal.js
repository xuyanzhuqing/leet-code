// 前序遍历 left root right
const { tree } = require('./tree.js')

function midOrderTraversal(root) {
  if (root) {
    midOrderTraversal(root.left)
    console.info(root.val)
    midOrderTraversal(root.right)
  }
}

midOrderTraversal(tree)

function midOrderTraversal1 (root) {
  var stack = []
  var ans = []
  var curr = root
  while (curr || stack.length) {
    if (curr) {
      stack.push(curr)
      curr = curr.left
    } else {
      var node = stack.pop()
      ans.push(node.val)
      curr = node.right
    }
  }
  return ans
}

console.info(midOrderTraversal1(tree))