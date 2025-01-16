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
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) {
                // Duplicate value, do not insert
                return undefined;
            }
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    // Insert as left child
                    temp.left = newNode;
                    return this;
                }
                // Traverse left
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    // Insert as right child
                    temp.right = newNode;
                    return this;
                }
                // Traverse right
                temp = temp.right;
            }
        }
    }
}
