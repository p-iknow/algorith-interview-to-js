import unittest  # The test framework
from typing import List

# https://leetcode.com/problems/valid-palindrome/


def reorder_log_files(logs: List[str]) -> List[str]:
    letters, digits = [], []
    for log in logs:
        if log.split()[1].isdigit():
            digits.append(log)
        else:
            letters.append(log)

    # 두 개의 키를 람다 표현식으로 정렬
    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))
    return letters + digits


class TestReorderLogFiles(unittest.TestCase):

    def test_case1(self):
        # given
        logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6",
                "let2 own kit dig", "let3 art zero"]
        # when
        res = reorder_log_files(logs)

        # then
        assert res == [
            "let1 art can", "let3 art zero", "let2 own kit dig", "dig1 8 1 5 1", "dig2 3 6"]

    def test_case2(self):
        # given
        logs = ["a1 9 2 3 1", "g1 act car", "zo4 4 7",
                "ab1 off key dog", "a8 act zoo"]
        # when
        res = reorder_log_files(logs)

        # then
        assert res == ["g1 act car", "a8 act zoo",
                       "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]


if __name__ == '__main__':
    unittest.main()
