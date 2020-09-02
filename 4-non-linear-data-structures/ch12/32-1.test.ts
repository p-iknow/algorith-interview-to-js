// https://leetcode.com/problems/number-of-islands/

type Grid = ('1' | '0')[][];

const numIslands = (grid: Grid): number => {
	// 예외 처리
	if (grid.length === 0) return 0;

	let count = 0;

	const rowMax = grid.length;
	const colMax = grid[0].length;

	for (let row = 0; row < rowMax; row++) {
		for (let col = 0; col < colMax; col++) {
			if (grid[row][col] == '1') {
				dfs(grid, row, col);
				// 연결된 육지에 대한 모든 탐색이 끝난 경우 카운트 1 증가
				count += 1;
			}
		}
	}
	return count;
};

const dfs = (grid: Grid, row: number, col: number): void => {
	const rowMax = grid.length;
	const colMax = grid[0].length;

	//  더 이상 땅이 아닌 경우 종료
	const isNotLand =
		row < 0 ||
		row >= rowMax ||
		col < 0 ||
		col >= colMax ||
		grid[row][col] !== '1';

	if (isNotLand) return;

	// 다음 번 탐색에서 다시 방문하지 않도록 처리하기
	grid[row][col] = '0';

	// 동서남북 탐색
	dfs(grid, row - 1, col);
	dfs(grid, row + 1, col);
	dfs(grid, row, col - 1);
	dfs(grid, row, col + 1);
};

/*
to run test use commend below

npx jest 4-non-linear-data-structures/ch12/32-1.test.ts
*/

describe('[numIslands] TEST', () => {
	it(`numIslands([
		["1","1","1","1","0"],
		["1","1","0","1","0"],
		["1","1","0","0","0"],
		["0","0","0","0","0"]
	]) toEqual: 1`, () => {
		expect(
			numIslands([
				['1', '1', '1', '1', '0'],
				['1', '1', '0', '1', '0'],
				['1', '1', '0', '0', '0'],
				['0', '0', '0', '0', '0'],
			])
		).toBe(1);
	});

	it(`numIslands([
		["1","1","0","0","0"],
		["1","1","0","0","0"],
		["0","0","1","0","0"],
		["0","0","0","1","1"]
	]
	), toEqual: 3`, () => {
		expect(
			numIslands([
				['1', '1', '0', '0', '0'],
				['1', '1', '0', '0', '0'],
				['0', '0', '1', '0', '0'],
				['0', '0', '0', '1', '1'],
			])
		).toEqual(3);
	});
});

export {};
