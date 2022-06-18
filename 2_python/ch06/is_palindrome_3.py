
import re


def is_palindrome(s: str) -> bool:
    s = s.lower()
    s = re.sub('[\W_]', '', s)
    return s == s[::-1]
