import unittest   # The test framework

# https://leetcode.com/problems/valid-palindrome/


def isPalindrome(s: str) -> bool:
    strs = []
    for char in s:
        if char.isalnum():
            strs.append(char.lower())

    # 팰린드롬 여부 판별
    while len(strs) > 1:
        if strs.pop(0) != strs.pop():
            return False

    return True


class TestIsPalindrome(unittest.TestCase):
    def test_case1(self):
        # given
        arg = "A man, a plan, a canal: Panama"
        # when
        result = isPalindrome(arg)
        # then
        self.assertEqual(result, True)

    def test_cse2(self):
        # given
        arg = "race a car"
        # when
        result = isPalindrome(arg)
        # then
        self.assertEqual(result, False)

    def test_cse3(self):
        self.assertEqual(4, 4)


if __name__ == '__main__':
    unittest.main()
