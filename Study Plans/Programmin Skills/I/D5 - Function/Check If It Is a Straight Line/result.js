/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

var checkStraightLine = function (coordinates) {
    const x = 0;
    const y = 1;
    const differenceX = coordinates[1][x] - coordinates[0][x]; // Get the difference of the x-coordinate
    const differenceY = coordinates[1][y] - coordinates[0][y]; // Get the difference of the y-coordinate

    return coordinates.every((point) =>
        differenceY * (point[x] - coordinates[0][x]) - differenceX * (point[y] - coordinates[0][y]) === 0
    )
};