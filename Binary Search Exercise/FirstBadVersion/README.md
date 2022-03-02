# First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

## How to minimize the number os call ?

Using [Binary Search](../BinarySearch/README.md) we can divide the search interval in half. 

### Example
Number of Total versions (n) = 5

Bad version = 4

call isBadVersion(3) => false

call isBadVersion(5) => true

call isBadVersion(4) => true

Then 4 is the first bad version

