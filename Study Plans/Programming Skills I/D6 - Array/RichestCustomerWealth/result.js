/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
    let customersWealth = []; // Store customers wealth

    for (customer = 0; customer < accounts.length; customer++) {
        let wealth = 0;

        for (money = 0; money < accounts[customer].length; money++) {
            wealth += accounts[customer][money]; // Adds the money to the customer´s wealth
        }

        customersWealth.push(wealth); // Adds the customer´s wealth in customersWealth
    }

    return Math.max(...customersWealth) // Returns the maximum wealth
};

