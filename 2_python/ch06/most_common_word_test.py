import collections
import re
import unittest  # The test framework
from typing import List


# https://leetcode.com/problems/most-common-word/
def most_common_word_1(paragraph: str, banned: List[str]) -> str:
    # The r means that the string is to be treated as a raw string, which means all escape codes will be ignored.
    # For an example:
    # '\n' will be treated as a newline character, while r'\n' will be treated as the characters \ followed by n.
    # https://stackoverflow.com/questions/4780088/what-does-preceding-a-string-literal-with-r-mean
    words = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split()
             if word not in banned]

    counts = collections.defaultdict(int)
    for word in words:
        counts[word] += 1

    # 가장 흔하게 등장하는 단어의 첫 번째 인덱스 리턴
    # e.g counts.get('ball') -> 2, counts 는 dictionary 로 key가 리턴되는데,
    # max 비교의 기준을 key에 해당하는 value(dict.get()) 로 설정하고자 할 때 아래와 같이 할 수 있다.
    return max(counts, key=counts.get)


def most_common_word_2(paragraph: str, banned: List[str]) -> str:
    # The r means that the string is to be treated as a raw string, which means all escape codes will be ignored.
    # For an example:
    # '\n' will be treated as a newline character, while r'\n' will be treated as the characters \ followed by n.
    # https://stackoverflow.com/questions/4780088/what-does-preceding-a-string-literal-with-r-mean
    words = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split()
             if word not in banned]

    # collections.Counter 메소드는 `for word in words: counts[word] += 1` 의 역할을 대신해줌
    counts = collections.Counter(words)

    # 가장 흔하게 등장하는 단어의 첫 번째 인덱스 리턴
    return counts.most_common(1)[0][0]
    # https://docs.python.org/3/library/collections.html#collections.Counter.most_common
    #  counts.most_common(1)
    # [('ball', 2)]
    # counts.most_common(1)[0]
    # ('ball', 2)
    # counts.most_common(1)[0][0]
    # 'ball'


class MostCommonWord(unittest.TestCase):
    def test_case1(self):
        # given
        paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
        banned = ["hit"]
        # when
        res = most_common_word_1(paragraph, banned)
        # then
        assert res == "ball"

    def test_case2(self):
        # given
        paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
        banned = ["hit"]
        # when
        res = most_common_word_2(paragraph, banned)
        # then
        assert res == "ball"


if __name__ == '__main__':
    unittest.main()
