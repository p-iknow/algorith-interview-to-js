
import re
from typing import Deque


class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        s = re.sub('[\W_]', '', s)
        return s == s[::-1]
