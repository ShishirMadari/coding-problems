/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1:
 * Input:
 * 
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * Output: 1
 *
 *
 * Example 2:
 * Input:
 * 
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * Output: 3
 *
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numIslands = 0;
    for (let i = 0; i< grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                numIslands++;
                mapIsland(grid, i, j); 
            }
        }
    }
    return numIslands;
};

function mapIsland(grid, i, j) {
    grid[i][j] = 'X';

    if ((i > 0) && grid[i-1][j] === '1')
        mapIsland(grid, i-1, j);
    if ((i < grid.length - 1) && grid[i+1][j] === '1')
        mapIsland(grid, i+1, j);
    if ((j > 0) && grid[i][j-1] === '1')
        mapIsland(grid, i, j-1);
    if ((j < grid[0].length - 1) && grid[i][j+1] === '1')
        mapIsland(grid, i, j+1);
}