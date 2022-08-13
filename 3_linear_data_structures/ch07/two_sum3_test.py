import unittest  # The test framework
from typing import List

# https://leetcode.com/problems/two-sum/


def two_sum(nums: List[int], target: int) -> List[int]:
    nums_map = {}
    # 키와 값을 바꿔서 딕셔너리로 저장
    for i, num in enumerate(nums):
        nums_map[num] = i

    # 타겟에서 첫 번째 수를 뺀 결과를 키로 조회
    for i, num in enumerate(nums):
        if target - num in nums_map and i != nums_map[target - num]:
            return [i, nums_map[target - num]]


class TestTwoSum3(unittest.TestCase):
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
