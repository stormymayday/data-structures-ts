import Queue from "@/implementations/data-structures/queues/barrett";

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

    find(value: number): Node | undefined {
        // check if root is null
        if (this.root === null) {
            return undefined;
        }

        // start at the root
        let current: Node | null = this.root;
        let found: boolean = false;
        // iterate until current runs into null or the value is found
        while (current && !found) {
            // value is less than current
            if (value < current.value) {
                current = current.left; // traverse left
            }
            // value is greater than current
            else if (value > current.value) {
                current = current.right; // traverse right
            }
            // value equals to current
            else {
                found = true;
            }
        }

        if (!found) {
            return undefined;
        } else {
            return current!;
        }
    }

    contains(value: number): boolean {
        // check if root is null
        if (this.root === null) {
            return false;
        }

        // start at the root
        let current: Node | null = this.root;
        // iterate until current runs into null or the value is found
        while (current) {
            // value is less than current
            if (value < current.value) {
                current = current.left; // traverse left
            }
            // value is greater than current
            else if (value > current.value) {
                current = current.right; // traverse right
            }
            // value equals to current
            else {
                return true;
            }
        }

        // value was not found
        return false;
    }

    BFS(): number[] {
        if (!this.root) {
            return [];
        }

        const data: number[] = [];
        const queue = new Queue<Node>();
        let node: Node = this.root;
        queue.enqueue(node);
        while (queue.length !== 0) {
            node = queue.dequeue() as Node;

            data.push(node.value);

            if (node.left) {
                queue.enqueue(node.left);
            }

            if (node.right) {
                queue.enqueue(node.right);
            }
        }

        return data;
    }
}
