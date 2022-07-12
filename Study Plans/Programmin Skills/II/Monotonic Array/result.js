/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
	for (i = 0; i < nums.length; i++) {
		if (nums[i] > nums[i + 1]) return decreasing();

		if (nums[i] < nums[i + 1]) return increasing();
	}

	return true;

	function increasing() {
		let i = 1;

		while (i < nums.length) {
			if (nums[i] > nums[i + 1]) {
				return false;
			}

			i++;
		}

		return true;
	}

	function decreasing() {
		let i = 1;

		while (i < nums.length) {
			if (nums[i] < nums[i + 1]) {
				return false;
			}

			i++;
		}

		return true;
	}
};
