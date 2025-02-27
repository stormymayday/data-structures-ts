class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;
    constructor(value: T) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value: T): LinkedList<T> {
        // Creating a new node with a given value
        const newNode = new Node(value);
        // (Edge Case) Checking if the list is empty
        if (!this.head) {
            // If empty, setting head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Connecting current tail's next pointer to the new node
            this.tail!.next = newNode;
            // Moving the tail pointer to the new node
            this.tail = newNode;
        }
        // Incrementing the length
        this.length++;
        // Returning the entire list
        return this;
    }

    pop(): Node<T> | undefined {
        // Edge Case - 1: Empty List
        if (!this.head) {
            // If the list is empty (no head), return undefined since there's nothing to remove
            return undefined;
        }

        // Initializing two pointers starting at the head:
        // temp - will move to the last node by the end of the while loop
        let temp = this.head;
        // pre - will be at the second to last node by the end of the while loop
        let pre = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        // Setting tail to the second to last node (pre)
        this.tail = pre;
        // Removing last node from the list
        this.tail.next = null;
        this.length--;
        // Edge Case - 2: One item
        if (this.length === 0) {
            // When length becomes 0, we need to set both head and tail to null
            this.head = null;
            this.tail = null;
        }
        // Returning removed (last) node
        return temp;
    }

    unshift() {}
}
