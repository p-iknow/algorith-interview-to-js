/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
	return s.reverse();
};

describe(`${reverseString.name}`, () => {
	it("case1", () => {
		// given
		const characters = ["h", "e", "l", "l", "o"];
		// when
		const res = reverseString(characters);
		// then
		expect(res).toEqual(["o", "l", "l", "e", "h"]);
	});

	it("case2", () => {
		// given
		const characters = ["h", "e", "l", "l", "o"];
		// when
		const res = reverseString(characters);
		// then
		expect(res).toEqual(["o", "l", "l", "e", "h"]);
	});
});
