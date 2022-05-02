/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let res = 0;

    var sum = function (root) {
        if (root == null) return;

        if (root.left && root.left.left == null && root.left.right == null) res += root.left.val;

        sum(root.left);
        sum(root.right);

    };

    sum(root);

    return res;
}