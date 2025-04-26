import Queue from "@/implementations/data-structures/queues/barrett";

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BST {
    root: TreeNode | null;
    constructor() {
        this.root = null;
    }

    insert(value: number): BST | undefined {
        // Step 1: create a node with a given value
        const newNode = new TreeNode(value);

        // Edge Case: Empty Tree
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        // Start from the root
        let temp = this.root;
        while (true) {
            // Edge Case: value already exists
            if (newNode.value === temp.value) {
                return undefined;
            }

            // Value is less than current node's value
            if (newNode.value < temp.value) {
                // Left spot is open
                if (temp.left === null) {
                    temp.left = newNode; // Insert as left child
                    return this;
                }
                // Left spot is occupied
                temp = temp.left; // Traverse left
            }
            // Value is greater than current node's value
            else {
                // Right spot is open
                if (temp.right === null) {
                    temp.right = newNode; // Insert as right child
                    return this;
                }
                // Right spot is occupied
                temp = temp.right; // Traverse right
            }
        }
    }

    contains(value: number): boolean {
        // Edge Case: Empty Tree
        if (this.root === null) {
            return false;
        }

        // Start at the root
        let temp: TreeNode | null = this.root;

        // Iterate until temp runs into 'null' or the value is found
        while (temp) {
            // value is less than current
            if (value < temp.value) {
                // go left
                temp = temp.left;
            }
            // value is greater than current
            else if (value > temp.value) {
                // go right
                temp = temp.right;
            } else {
                // value is equal
                return true;
            }
        }

        // value was not found
        return false;
    }

    BFS(): number[] {
        // Set pointer at the root
        let currentNode = this.root;

        // Edge Case: Empty Tree
        if (!currentNode) {
            return [];
        }

        // Initialize a queue and results array
        const queue = new Queue();
        const results = [];

        // Enqueue the root
        queue.enqueue(currentNode);

        // Iterate while queue is not empty
        while (queue.length !== 0) {
            currentNode = queue.dequeue() as TreeNode;

            results.push(currentNode.value);

            // check left
            if (currentNode.left) {
                queue.enqueue(currentNode.left); // enqueue if left exists
            }

            // check right
            if (currentNode.right) {
                queue.enqueue(currentNode.right); // enqueue if right exists
            }
        }

        return results;
    }

    DFSPreOrder(): number[] {
        // Edge Case: Empty Tree
        if (!this.root) {
            return [];
        }

        const results: number[] = [];

        // helper recursive function
        function traverse(currentNode: TreeNode) {
            // 1. Visit current node
            results.push(currentNode.value);

            // 2. Recursively visit left subtree
            if (currentNode.left) {
                traverse(currentNode.left);
            }

            // 3. Recursively visit right subtree
            if (currentNode.right) {
                traverse(currentNode.right);
            }
        }

        // Kick off with the root
        traverse(this.root);

        return results;
    }

    DFSPostOrder(): number[] {
        // Edge Case: Empty Tree
        if (!this.root) {
            return [];
        }

        const results: number[] = [];

        // helper recursive function
        function traverse(currentNode: TreeNode) {
            // 1. Recursively visit left subtree
            if (currentNode.left) {
                traverse(currentNode.left);
            }

            // 2. Recursively visit right subtree
            if (currentNode.right) {
                traverse(currentNode.right);
            }

            // 3. Visit current node
            results.push(currentNode.value);
        }

        // Kick off with the root
        traverse(this.root);

        return results;
    }
}
