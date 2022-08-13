import unittest  # The test framework
from typing import List

# https://leetcode.com/problems/valid-palindrome/


def trap(height: List[int]) -> int:
    if not height:
        return 0
    volume = 0
    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]

    while left < right:
        left_max, right_max = max(height[left], left_max), max(
            height[right], right_max)
        # 더 높은 쪽을 향해 투 포인터 이동
        if left_max <= right_max:
            volume += left_max - height[left]
            left += 1
        else:
            volume += right_max - height[right]
            right -= 1
    return volume


class TestReverseString(unittest.TestCase):
    def test_case1(self):
        # given
        heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
        # when
        res = trap(heights)
        # then
        assert res == 6

    def test_case2(self):
        # given
        characters = [4, 2, 0, 3, 2, 5]
        # when
        res = trap(characters)
        # then
        assert res == 9


if __name__ == "__main__":
    unittest.main()
