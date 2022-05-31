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
 * @return {boolean}
 */
let isBalanced = function (root) {
  let flag = true

  const getHeights = (node, height) => {
    if (!node) return 0;

    const leftHeight = getHeights(node.left, height + 1);
    const rightHeight = getHeights(node.right, height + 1);

    // Check if the diff in this sub tree was greater than 1
    if (Math.abs(rightHeight - leftHeight) > 1) {
      flag = false;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  getHeights(root, 0);

  return flag
}