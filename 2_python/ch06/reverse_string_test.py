import unittest  # The test framework
from typing import List

# https://leetcode.com/problems/valid-palindrome/


def reverse_string(characters: List[str]) -> List[str]:
    characters.reverse()
    return characters


class TestReverseString(unittest.TestCase):

    def test_case1(self):
        # given
        characters = ["h", "e", "l", "l", "o"]
        # when
        res = reverse_string(characters)
        # then
        assert res == ["o", "l", "l", "e", "h"]

    def test_case2(self):
        # given
        characters = ["H", "a", "n", "n", "a", "h"]
        # when
        res = reverse_string(characters)
        # then
        assert res == ["h", "a", "n", "n", "a", "H"]


if __name__ == '__main__':
    unittest.main()
