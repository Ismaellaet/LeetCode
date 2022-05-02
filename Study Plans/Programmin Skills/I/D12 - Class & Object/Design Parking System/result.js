/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    // Checks car type and if has space available
    if (carType === 1 && this.big > 0) {
        this.big -= 1; // Occupies a space
        return true;
    }

    if (carType === 2 && this.medium > 0) {
        this.medium -= 1;
        return true;
    }

    if (carType === 3 && this.small > 0) {
        this.small -= 1;
        return true
    }

    return false
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */