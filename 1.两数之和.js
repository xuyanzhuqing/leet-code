/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var res = new Map()

  for (var i = 0; i < nums.length; i++) {
    if (res.has(nums[i])) {
      return [res.get(nums[i]), i]
    }
    res.set(target - nums[i], i)
  }

  return []
};
// @lc code=end

