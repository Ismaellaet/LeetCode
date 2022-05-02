/**
 * @param {string} command
 * @return {string}
 */

var interpret = function (command) {
    let interpretation = "";

    for (i = 0; i < command.length; i++) {

        if (command[i] == "G") {
            interpretation += "G";
            continue;
        }

        if (command[i] == "(" && command[i + 1] == ")") {
            interpretation += "o";
            continue;
        }

        if (command[i] == "(" && command[i + 1] == "a") {
            interpretation += "al";
            continue;
        }
    }
    return interpretation
};

console.log(interpret("G()()()()(al)"))