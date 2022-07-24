/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let volume = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    // 더 높은 쪽을 향해 투 포인터 이동
    if (leftMax <= rightMax) {
      volume += leftMax - height[left];
      left++;
    } else {
      volume += rightMax - height[right];
      right--;
    }
  }
  return volume;
};

describe(`${trap.name}`, () => {
  it('case1', () => {
    // given
    const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    // when
    const res = trap(heights);
    // then
    expect(res).toEqual(6);
  });

  it('case2', () => {
    // given
    const characters = [4, 2, 0, 3, 2, 5];
    // when
    const res = trap(characters);
    // then
    expect(res).toEqual(9);
  });
});
