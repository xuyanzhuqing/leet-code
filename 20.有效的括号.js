/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (44.03%)
 * Likes:    4011
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 3.5M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length <= 1) return false
  var i, len = s.length
  var record = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  var stack = new Array(len)
  var top = -1
  var temp
  for (i = 0; i < len; i++) {
    temp = record[s[i]]
    if (temp) {
      stack[++top] = temp
    } else {
      if (stack[top] === s[i]) {
        stack[top] = void
        top--
      } else {
        return false
      }
    }
  }

  return top < 0
};
// @lc code=end

