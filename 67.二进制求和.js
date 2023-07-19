/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.96%)
 * Likes:    1052
 * Dislikes: 0
 * Total Accepted:    332.3K
 * Total Submissions: 627.7K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入:a = "11", b = "1"
 * 输出："100"
 * 
 * 示例 2：
 * 
 * 
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var i = a.length; j = b.length;
  var ans = new Array(Math.max(i, j) + 1)
  var index = ans.length - 1
  var rank = 0
  var curr

  i--
  j--
  while (i >= 0 || j >= 0) {
    curr = rank
    if (a[i--] === '1') {
      curr++
    }

    if (b[j--] === '1') {
      curr++
    }

    rank = curr >= 2 ? 1 : 0
    ans[index--] = curr % 2
  }

  if (rank) {
    ans[0] = rank
  }

  return rank ? ans.join('') : ans.slice(1).join('')
};
// @lc code=end

