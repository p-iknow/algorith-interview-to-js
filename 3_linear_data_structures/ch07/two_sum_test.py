import unittest  # The test framework
from typing import List

# https://leetcode.com/problems/two-sum/


def two_sum(nums: List[int], target: int) -> List[int]:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]


class TestTwoSum(unittest.TestCase):
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
        assert res == [0, 1]


if __name__ == "__main__":
    unittest.main()
