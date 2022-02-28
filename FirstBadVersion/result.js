function isBadVersion(version) { // Function to check if it's a bad version
    if(version >= bad) {
        return true;
    } return false;
}

const solution = function(isBadVersion) { // Function to find the FIRST bad version, using isBadVersion() as a parameter
    return function(n) { // n = Total versions
        let start = 0;

        while(start <= n) {
            let middle = Math.floor((n + start) / 2);

            if(isBadVersion(middle)) {
                n = middle - 1;
            } else {
                start = middle + 1; 
            }
        }
        return start;
    }
}