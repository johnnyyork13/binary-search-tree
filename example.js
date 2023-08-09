// remove(value, currentNode = this.root) {
//     if (currentNode === null) return currentNode;

//     if (currentNode.value === value) {
//       currentNode = this.#removeNodeHelper(currentNode);
//     } else if (currentNode.value > value) {
//       currentNode.leftChild = this.remove(value, currentNode.leftChild);
//     } else {
//       currentNode.rightChild = this.remove(value, currentNode.rightChild);
//     }
//     return currentNode;
//   }

// #inorderSuccessorFor(node) {
//     let currentNode = node;
//     while (currentNode.leftChild) {
//       currentNode = currentNode.leftChild;
//     }
//     return currentNode;
//   }

//   #removeNodeHelper(node) {
//     if (node.leftChild && node.rightChild) {
//       const successorNode = this.#inorderSuccessorFor(node.rightChild);
//       node.value = successorNode.value;
//       node.rightChild = this.remove(successorNode.value, node.rightChild);
//       return node;
//     } else {
//       const replacementNode = node.rightChild || node.leftChild;
//       node = null;
//       return replacementNode;
//     }
//   }

// console.log(node);
//         if (node === null) return node;
//         if (value < node.data) node.left = this.delete(value, node.left);
//         else if (value > node.data) node.right = this.delete(value, node.right);
//         else {
//             //found it
//             //console.log('val', value, 'data', node);
//             if (node.left === null) return node.right;
//             if (node.right === null) return node.left;
//         }
//         return node;