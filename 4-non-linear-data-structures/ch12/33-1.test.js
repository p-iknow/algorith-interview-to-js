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
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz',
	};

	const dfs = (index, path) => {
		// 끝까지 탐색하면 백트래킹
		if (path.length === digits.length) {
			result.push(path);
			return;
		}

		for (let i = index; i < digits.length; i++) {
			dic[digits[i]].split('').forEach(j => {
				dfs(i + 1, path + j);
			});
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
});
