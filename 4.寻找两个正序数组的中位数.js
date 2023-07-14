/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (41.52%)
 * Likes:    6628
 * Dislikes: 0
 * Total Accepted:    971.8K
 * Total Submissions: 2.3M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var len1 = nums1.length, len2 = nums2.length;

  if (len1 === 0) {
    if (len2 % 2 === 0) {
      return (nums2[len2 / 2] + nums2[len2 / 2 - 1]) / 2
    } else {
      return nums2[(len2 - 1) / 2]
    }
  }

  if (len2 === 0) {
    if (len1 % 2 === 0) {
      return (nums1[len1 / 2] + nums1[len1 / 2 - 1]) / 2
    } else {
      return nums1[(len1 - 1) / 2]
    }
  }

  var i = 0, j = 0;
  var total = len1 + len2;

  var ans = []
  while (i < len1 || j < len2) {
    if (i >= len1) {
      ans.push(nums2[j++])
      continue
    }

    if (j >= len2) {
      ans.push(nums1[i++])
      continue
    }

    if (nums1[i] >= nums2[j]) {
      ans.push(nums2[j])
      j++
    } else {
      ans.push(nums1[i])
      i++
    }
  }

  if (total % 2 === 0) {
    return (ans[total / 2] + ans[total / 2 - 1]) / 2
  } else {
    return ans[(total - 1) / 2]
  }
};
// @lc code=end

