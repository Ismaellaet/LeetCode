/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

var preorder = function (root) {
    let list = []; // List of node values

    function order(root, list) {
        if (root == null) { return list }

        list.push(root.val); // Add value of node in list

        // Run the function for each children of root
        for (let child of root.children) {
            order(child, list)
        }

        return list
    }

    return order(root, list);
};