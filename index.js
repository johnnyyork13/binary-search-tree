class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(data) {
        this.root = this.buildTree([...new Set(data)]);
    }

    buildTree(arr) {
        if (arr.length === 0) {
            return null;
        }

        const mid = Math.floor(arr.length / 2);
        const node = new Node(arr[mid]);
        node.left = this.buildTree(arr.slice(0, mid));
        node.right = this.buildTree(arr.slice(mid + 1));

        return node;
    }

    insert(value, currentNode = this.root) {
        const node = new Node(value);
        if (currentNode.left !== null && node.data < currentNode.data) {
            return this.insert(value, currentNode.left);   
        } else if (currentNode.right !== null && node.data > currentNode.data) {
            return this.insert(value, currentNode.right);
        } else {
            if (node.data < currentNode.data) {
                currentNode.left = node;
            } else {
                currentNode.right = node;
            }
        }
    }

    findSuccessor(node) {
        let successor = node.right;
        while (successor.left != null) {
            successor = successor.left;
        }
        successor.left = node.left;
        return successor;
    }

    //make this delete function work for this binary search tree
    delete(value, node = this.root) {
        console.log(node);
        if (node === null) return null;
        if (value < node.data) node.left = this.delete(value, node.left);
        else if (value > node.data) node.right = this.delete(value, node.right);
        else {
            if (node.left === null) return node.right;
            else if (node.right === null) return node.left;
            else {
                return this.findSuccessor(node);
            }
        }
        //on the way back, return node if no conditions are met
        return node;
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}

const myArr = [1,3,4,5,6,7,8,9];
const myTree = new BST(myArr);
myTree.insert(2);
myTree.insert(11);
myTree.insert(22);
myTree.insert(10);
myTree.delete(4);

myTree.prettyPrint(myTree.root);
//console.log(myTree.root.left.left.left);