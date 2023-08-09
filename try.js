class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(arr) {
        this.root = this.buildTree(arr.sort((a, b) => a - b));
    }

    buildTree(arr) {
        if (arr.length === 0) return null;

        const mid = Math.floor(arr.length / 2);
        const node = new Node(arr[mid]);
        node.left = this.buildTree(arr.slice(0, mid));
        node.right = this.buildTree(arr.slice(mid + 1));

        return node;
    }

    insert(value, node = this.root, ) {
        if (node.left && value < node.left.value) {
            node.left = this.insert(value, node.left);
        } else if (node.right && value > node.right.value) {
            node.right = this.insert(value, node.right);
        } else {
            const newNode = new Node(value);
            if (value < node.value) {
                node.left = newNode;
            } else {
                node.right = newNode;
            }
            return node;
        }
        return node;
    }

    findSuccessor(node) {
        let successor = node.right;
        while (successor.left !== null) {
            successor = successor.left;
        }
        successor.left = node.left;
        return successor;
    }

    delete(value, node = this.root) {
        if (value < node.value) {
            node.left = this.delete(value, node.left);
        } else if (value > node.value) {
            node.right = this.delete(value, node.right);
        } else {
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            return this.findSuccessor(node);
        }
        return node;
    }

    find(value, node = this.root) {
        if (node === null) return node;
        if (value < node.value) {
            return this.find(value, node.left);
        } else if (value > node.value) {
            return this.find(value, node.right);
        }
        return node;
    }

    levelOrder(node = this.root) {
        let queue = [node];
        let result = [];
        while (queue.length > 0) {
            if (queue[0].left) queue.push(queue[0].left);
            if (queue[0].right) queue.push(queue[0].right);
            result.push(queue.shift().value);
        }
        return result;
    }

    height(node = this.root) {
        if (node === null) return -1;
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    depth(value, node = this.root, count = 0) {
        if (node.value === value) {
            return count;
        }
        if (value < node.value) count = this.depth(value, node.left, count + 1);
        if (value > node.value) count = this.depth(value, node.right, count + 1);
        return count;
    }

    preorder(node = this.root, result = []) {
        if (node === null) return null;

        result.push(node.value);
        this.preorder(node.left, result);
        this.preorder(node.right, result);

        return result;
    }

    prettyPrint(node, prefix = "", isLeft = true){
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

}


const myBST = new BST([1,2,3,4,5,6,7,8,9]);
// myBST.delete(3);
// myBST.delete(2);
// myBST.delete(9);
myBST.insert(9);
//console.log('Height', myBST.height(9));
//console.log("Depth", myBST.depth(9));

console.log(myBST.preorder());

//console.log(myBST.find(9));

//console.log(myBST.levelOrder());

myBST.prettyPrint(myBST.root);


