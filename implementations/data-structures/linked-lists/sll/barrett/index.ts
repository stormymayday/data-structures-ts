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
}
