import unittest  # The test framework
from typing import List

# https://leetcode.com/problems/two-sum/


def two_sum(nums: List[int], target: int) -> List[int]:
    for i, n in enumerate(nums):
        complement = target - n

        if complement in nums[i + 1:]:
            return [nums.index(n), nums[i + 1:].index(complement) + (i + 1)]


class TestTwoSum2(unittest.TestCase):
    def test_case1(self):
        # given
        nums = [2, 7, 11, 15]
        target = 9
        # when
        res = two_sum(nums, target)
        # then
        assert res == [0, 1]

    def test_case2(self):
        # given
        nums = [3, 2, 4]
        target = 6
        # when
        res = two_sum(nums, target)
        # then
        assert res == [1, 2]

    def test_case3(self):
        # given
        nums = [3, 3]
        target = 6
        # when
        res = two_sum(nums, target)
        # then
        assert res == [0, 1]


if __name__ == "__main__":
    unittest.main()
