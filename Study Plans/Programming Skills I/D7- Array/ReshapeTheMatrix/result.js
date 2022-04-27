/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function (mat, r, c) {
    let matReshape = [];
    let pointerR = 0; // Pointer to row
    let pointerC = 0; // Pointer to column

    // Checks if it is impossible to map
    if (r * c !== mat.length * mat[0].length) {
        return mat
    }

    for (row = 0; row < r; row++) {
        // Create a new empty array in matReshape
        matReshape.push([])

        for (col = 0; col < c; col++) {
            matReshape[row].push(mat[pointerR][pointerC]); // Adds the value in matReshape

            pointerC++;

            // Checks if mat[pointerR][pointerC] isn't exists
            if (mat[pointerR][pointerC] == undefined) {
                pointerR++; // Go to the next row
                pointerC = 0; // Resests pointerC
            }
        }
    }

    return matReshape
};