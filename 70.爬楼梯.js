/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode.cn/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (54.06%)
 * Likes:    3111
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.2M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 45
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 爬 n 阶需要的步数
  // f(0) = 1
  // f(1) = 1
  // f(2) = 2
  // f(3) = 3
  // f(4) = 5
  // f(x) = f(x - 1) + f(x - 2)

  var p = 0, q = 0, r = 1, i;
  for (i = 1; i <= n; i++) {
    p = q      // 0 1 1
    q = r      // 1 1 2
    r = p + q  // 1 2 3
  }
  return r
};
// @lc code=end

