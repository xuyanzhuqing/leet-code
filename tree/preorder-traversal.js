// 前序遍历 root left right
const { tree } = require('./tree.js')

function preOrderTraversal(root) {
  if (root) {
    console.info(root.val)
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)
  }
}

function preOrderTraversal1 (root) {
  var stack = []
  var ans = []
  var curr = root
  while (curr || stack.length) {
    if (curr) {
      stack.push(curr)
      ans.push(curr.val)
      curr = curr.left
    } else {
      var node = stack.pop()
      curr = node.right
    }
  }
  return ans
}

preOrderTraversal(tree)
console.info(preOrderTraversal1(tree))