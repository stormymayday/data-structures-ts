class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): BinarySearchTree | undefined {
        // Creating a new node with a given value
        const newNode = new Node(value);

        // Check if the tree is empty
        if (this.root === null) {
            this.root = newNode; // insert at the root
            return this;
        }

        // Otherwise, start at the root
        let current = this.root;
        while (true) {
            // Edge Case: check if the value already exists
            if (value === current.value) {
                return undefined;
            }

            // If value is less than current - check left
            if (value < current.value) {
                // Left spot is open
                if (current.left === null) {
                    current.left = newNode; // insert at left
                    return this;
                }
                // Left spot is occupied
                else {
                    current = current.left; // traverse left
                }
            }
            // If value is greater than current - check right
            else if (value > current.value) {
                // Right spot is open
                if (current.right === null) {
                    current.right = newNode; // insert at right
                    return this;
                }
                // Right spot is occupied
                else {
                    current = current.right; // traverse right
                }
            }
        }
    }
}
