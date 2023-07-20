function Node (val, left, right) {
  this.val = val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const tree = new Node(
  1,
  new Node(
    2,
    new Node(4),
    new Node(5,
      new Node(7), new Node(8)
    )
  ),
  new Node(3, null, new Node(6))
)

const treeMap = `
     1
   /   \\
  2     3
/  \\    \\
4   5     6
    / \\
   7   8
`
console.info(treeMap)
module.exports = {
  tree,
  Node
}

// https://blog.csdn.net/My_Jobs/article/details/43451187