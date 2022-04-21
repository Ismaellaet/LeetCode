/**
 * @param {number[]} salary
 * @return {number}
 */

var average = function (salary) {
    const maximumSalaryIndex = salary.indexOf(Math.max(...salary)); // Get index of maximum salary
    salary.splice(maximumSalaryIndex, 1) // Remove maximumSalary from salary

    const minimumSalaryIndex = salary.indexOf(Math.min(...salary)); // Get index of minimum salary
    salary.splice(minimumSalaryIndex, 1) // Remove minimumSalary from salary

    const sumSalaries = salary.reduce((previousSalary, currentSalary) => previousSalary + currentSalary) // Get sum of salaries

    return sumSalaries / salary.length // Average of salary
};