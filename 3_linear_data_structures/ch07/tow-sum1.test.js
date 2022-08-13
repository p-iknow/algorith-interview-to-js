/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

describe(`${twoSum.name}`, () => {
  it('case1', () => {
    // given

    const nums = [2, 7, 11, 15];
    const target = 9;
    // when
    const res = twoSum(nums, target);
    // then
    expect(res).toEqual([0, 1]);
  });

  it('case2', () => {
    // given
    const nums = [3, 2, 4];
    const target = 6;
    // when
    const res = twoSum(nums, target);
    // then
    expect(res).toEqual([1, 2]);
  });

  it('case3', () => {
    // given
    const nums = [3, 3];
    const target = 6;
    // when
    const res = twoSum(nums, target);
    // then
    expect(res).toEqual([0, 1]);
  });
});
