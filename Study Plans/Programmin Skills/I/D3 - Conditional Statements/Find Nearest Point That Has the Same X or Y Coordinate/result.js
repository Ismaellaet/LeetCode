/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */

var nearestValidPoint = function (x, y, points) {
    const pointX = 0;
    const pointY = 1;

    function getValidPoints() {
        let validPoints = [];

        for (i = 0; i < points.length; i++) {

            // Checks for valid points in points
            if (points[i][pointX] === x || points[i][pointY] === y) {
                validPoints.push(points[i]) // Add in valid points
            }
        }

        return validPoints;
    }

    function getValidPointWithSmallestDistance() {
        const validPoints = getValidPoints();
        let distances = [];

        for (i = 0; i < validPoints.length; i++) {
            const distance = Math.abs(x - validPoints[i][pointX]) + Math.abs(y - validPoints[i][pointY]); // Manhattan distance: https://xlinux.nist.gov/dads/HTML/manhattanDistance.html

            distances.push(distance) // Add in distances
        }

        const smallestDistanceIndex = distances.indexOf(Math.min(...distances)) // Get index of smallest distance
        return validPoints[smallestDistanceIndex]
    }

    return points.indexOf(getValidPointWithSmallestDistance())
};