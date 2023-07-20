// 前序遍历 left right root
const { tree } = require('./tree.js')

function postOrderTraversal(root) {
  if (root) {
    postOrderTraversal(root.left)
    postOrderTraversal(root.right)
    console.info(root.val)
  }
}

function postOrderTraversal1 (root) {
  var res = [];
  if (root == null) {
      return res;
  }

  var stack = [];
  var prev = null;
  while (root || !stack.length) {
      while (root) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      if (root.right == null || root.right == prev) {
          res.push(root.val);
          prev = root;
          root = null;
      } else {
          stack.push(root);
          root = root.right;
      }
  }
  return res;
}

// https://leetcode.cn/search/?q=%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86

postOrderTraversal(tree)