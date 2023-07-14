/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode.cn/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (55.95%)
 * Likes:    2586
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 2.5M
 * Testcase Example:  '121'
 *
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 
 * 例如，121 是回文，而 123 不是。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 121
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -121
 * 输出：false
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 10
 * 输出：false
 * 解释：从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 <= x <= 2^31 - 1
 * 
 * 
 * 
 * 
 * 进阶：你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  var ans = []

  while (x !== 0) {
    ans.push(x % 10)
    x = (x - x % 10) / 10
  }

  var len = ans.length
  var i;
  var end;
  if (len % 2 === 0) {
    end = ans.length / 2 - 1
    for (i = 0; i <= end; i++) {
      if (ans[i] !== ans[len - i - 1]) {
        return false
      }
    }
  } else {
    end = (ans.length - 1) / 2
    for (i = 0; i < end; i++) {
      if (ans[i] !== ans[len - i - 1]) {
        return false
      }
    }
  }

  return true
};
// @lc code=end

