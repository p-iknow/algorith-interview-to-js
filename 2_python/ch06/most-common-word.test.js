/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
  const counterMap = new Map();

  const words = paragraph.toLowerCase().split(/\W+/g);

  let most;
  words.forEach(word => {
    if (!banned.includes(word)) {
      counterMap.set(word, counterMap.has(word) ? counterMap.get(word) + 1 : 1);
      if (!most || counterMap.get(word) > counterMap.get(most)) {
        most = word;
      }
    }
  });

  return most;
};

describe(`${mostCommonWord.name}`, () => {
  it('case1', () => {
    // given
    const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
    const banned = ['hit'];

    // when
    const res = mostCommonWord(paragraph, banned);

    // then
    expect(res).toBe('ball');
  });
});
