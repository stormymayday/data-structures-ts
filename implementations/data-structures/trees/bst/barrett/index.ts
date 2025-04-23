class Node<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BST<T> {
    root: Node<T> | null;
    constructor() {
        this.root = null;
    }

    insert(value: T): BST<T> | undefined {
        // Step 1: create a node with a given value
        const newNode = new Node(value);

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

    contains(value: T): boolean {
        if (this.root === null) {
            return false;
        }
        let temp: Node<T> | null = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }
}
