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

    unshift(value: T): LinkedList<T> {
        // Create a new node with the given value
        const newNode = new Node(value);

        // Edge Case: Empty list
        if (!this.head) {
            // If the list is empty, set head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Point the new node's next to the current head
            newNode.next = this.head;
            // Update the head to be the new node
            this.head = newNode;
        }

        // Increment the length
        this.length++;

        // Return the updated list
        return this;
    }

    shift(): Node<T> | undefined {
        // Edge Case: Empty list
        if (!this.head) {
            return undefined;
        }

        // Store the current head to return later
        const temp = this.head;

        // Update the head to be the next node
        this.head = this.head.next;

        // Disconnect the removed node from list
        temp.next = null;

        // Decrement the length
        this.length--;

        // Edge Case: If list is now empty (had only one node)
        if (this.length === 0) {
            // Set tail to null
            this.tail = null;
        }

        // Return the removed node
        return temp;
    }

    get(index: number): Node<T> | undefined {
        // Edge Case: Checking if index is out of bounds or list is empty
        if (index < 0 || index >= this.length || !this.head) {
            return undefined;
        }
        // Start at the head
        let temp = this.head;
        // Traversing the list to the specified index
        for (let i = 0; i < index; i++) {
            // Move temp forward
            temp = temp.next!;
        }
        // Return the node at the index
        return temp;
    }

    set(index: number, value: T): boolean {
        // Using the get method to retrieve the node at the specified index
        const temp = this.get(index);

        // If a node was found
        if (temp) {
            // Update its value and return true
            temp.value = value;
            return true;
        }
        // Otherwise, return false
        return false;
    }

    insert(index: number, value: T): boolean {
        // Checking if index is out of bounds
        if (index < 0 || index > this.length) {
            return false;
        }

        // Inserting at the beginning of the list
        if (index === 0) {
            this.unshift(value);
            return true;
        }

        // Inserting at the end of the list
        if (index === this.length) {
            this.push(value);
            return true;
        }

        // Inserting in the middle of the list
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        if (temp) {
            newNode.next = temp.next;
            temp.next = newNode;
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    remove(index: number): Node<T> | undefined {
        // Edge Case: Checking if index is out of bounds
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        // Removing the first node
        if (index === 0) {
            return this.shift();
        }

        // Removing the last node
        if (index === this.length - 1) {
            return this.pop();
        }

        // Retrieve the node before the one to be removed
        const before = this.get(index - 1);

        // Store the node to remove
        const temp = before!.next!;

        // Moving before's pointer past temp
        before!.next = temp.next;

        // Removing temp from the list
        temp.next = null;

        // Decrementing the length
        this.length--;

        // Returning the removed node
        return temp;
    }

    reverse(): LinkedList<T> {
        // Swapping head and tail
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // Initializing pointers for reversal
        let next: Node<T> | null = null;
        let prev: Node<T> | null = null;

        // Iterating through the list and reversing links
        for (let i = 0; i < this.length; i++) {
            // Move next forward
            next = temp!.next;

            // Reversing the current node's pointer
            temp!.next = prev;

            // Point perv to temp
            prev = temp;

            // Point temp to next
            temp = next;
        }

        return this;
    }
}
