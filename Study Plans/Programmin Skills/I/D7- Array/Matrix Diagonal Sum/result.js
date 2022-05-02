/**
 * @param {number[][]} mat
 * @return {number}
 */

var diagonalSum = function (mat) {
    let indices = getIndicesOfDiagonals(); // Get all indices of diagonals 
    let total = 0; // Total sum of diagonals

    // Loop in indices[]
    for (i = 0; i < indices.length; i++) {
        total += mat[indices[i][0]][indices[i][1]]; // Get the value of mat[] by indices[]
    }

    function getIndicesOfDiagonals() {
        let indices = [];
        let primary = 0; // Primary diagonal
        let secondary = mat.length - 1; // Secondary diagonal

        for (i = 0; i < mat.length; i++) {
            // Check if the indices are different
            if ((i, secondary) !== (i, primary)) {
                // Add both indices in indices[]
                indices.push([i, primary]);
                indices.push([i, secondary]);
            } else {
                // If the indices are the same, add only the index of primary diagonal
                indices.push([i, primary]);
            }

            primary++
            secondary--
        }

        return indices
    }

    return total
};

