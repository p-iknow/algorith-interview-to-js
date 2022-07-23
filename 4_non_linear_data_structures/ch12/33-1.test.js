// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// https://github.com/onlybooks/algorithm-interview/blob/master/4-non-linear-data-structures/ch12/33-1.py

/**
 * @param {string} digits
 * @return {string[]}
 */

const letterCombinations = digits => {
  if (digits.length === 0) return [];

  const result = [];
  const dic = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const dfs = (index, letterCombination) => {
    // 끝까지 탐색하면 백트래킹
    if (letterCombination.length === digits.length) {
      result.push(letterCombination);
      return;
    }

    for (let i = index; i < digits.length; i++) {
      const lettersforDigit = dic[digits[i]];
      for (const letter of lettersforDigit) {
        dfs(i + 1, letterCombination + letter);
      }
    }
  };

  dfs(0, '');

  return result;
};

/*
to run test use commend below

npx jest 4-non-linear-data-structures/ch12/33-1.test.js
*/

describe('[letterCombinations] TEST', () => {
  it(`letterCombinations("23") toEqual:
	'ad',
	'ae',
	'af',
	'bd',
	'be',
	'bf',
	'cd',
	'ce',
	'cf',
]`, () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });

  it(`letterCombinations("234") toEqual:
	[
		'adg',
		'adh',
		'adi',
		'aeg',
		'aeh',
		'aei',
		'afg',
		'afh',
		'afi',
		'bdg',
		'bdh',
		'bdi',
		'beg',
		'beh',
		'bei',
		'bfg',
		'bfh',
		'bfi',
		'cdg',
		'cdh',
		'cdi',
		'ceg',
		'ceh',
		'cei',
		'cfg',
		'cfh',
		'cfi',
	]
	`, () => {
    expect(letterCombinations('234')).toEqual([
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi',
    ]);
  });
});
