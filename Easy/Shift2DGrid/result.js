/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 
var shiftGrid = function(grid, k) {
    while(k > 0) { // Loop for controlling shift operation times
        for(i = 0; i < grid.length; i++) { 
            const n = grid[i].length; 
            const nextArray = grid [i + 1] // Next array
            const lastNumber = grid[i][n - 1];   // Store the last number of the grid[i]

            grid[i].pop() // Removes the last number from grid[i]

            // Check if next array is not undefined
            if(nextArray != undefined) { 
                nextArray.unshift(lastNumber) // Add the lastNumber to the beginning of nextArray
            } else {
                grid[0].unshift(lastNumber) // Add the lastNumber to the beginning of first array
            }
        } 

        k-- // k - 1
    }
    
    console.log(grid);
};
 
 
 shiftGrid(grid, k)