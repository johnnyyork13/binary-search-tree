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

    //make this delete function work for this binary search tree
    delete(value, currentNode = this.root) {
        // if (currentNode === null) return currentNode;

        // if (currentNode.value === value) {
            
        // }
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
myTree.insert(0);
myTree.delete(10);

myTree.prettyPrint(myTree.root);
//console.log(myTree.root.left.left.left);