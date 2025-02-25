class Node<T> {
    val: T;
    next: Node<T> | null;
    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T): SinglyLinkedList<T> {
        // Create a new node using the value passed to the function
        const newNode = new Node(val);

        // If there is no head property on the list
        if (!this.head) {
            // set the head and tail to be the newly created node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise set the next property on the tail to be new node
            this.tail!.next = newNode;
            // and set the tail property on the list to be the newly created node
            this.tail = newNode;
        }

        // Increment the length by one
        this.length++;

        // Return the list
        return this;
    }

    pop(): Node<T> | undefined {
        // If there are no nodes in the list, return undefined
        if (!this.head) {
            return undefined;
        }

        let current: Node<T> | null = this.head;
        let newTail: Node<T> | null = current;

        // Loop through the list until you reach the tail
        while (current.next) {
            // newTail is always one spot behind current
            newTail = current;
            current = current.next;
        }

        // Set the tail to be the 2nd to last node
        this.tail = newTail;
        // Set the next property of the 2nd to last node to be null (severs connection with the last node)
        this.tail.next = null;

        // Decrement the length by one
        this.length--;
        // When length becomes 0, we need to set both head and tail to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // Return the removed node
        return current;
    }

    shift(): Node<T> | undefined {
        // If there are no nodes, return undefined
        if (!this.head) {
            return undefined;
        }
        // Store the current head property in a variable
        const currentHead = this.head;
        // Set the head property to be the current head's next property
        this.head = currentHead.next;
        // Disconnect the first node from list
        currentHead.next = null;
        // Decrement the length length by 1
        this.length--;
        // If list is now empty (had only one node)
        if (this.length === 0) {
            // Set tail to null
            this.tail = null;
        }
        // Return the first node
        return currentHead;
    }

    unshift(val: T): SinglyLinkedList<T> {
        // Create a new node using the value passed to the function
        const newNode = new Node(val);
        // If there is no head property on the list
        if (!this.head) {
            // set head and tail to be the newly created node
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Otherwise, set the newly created node's next property to be the current head property on the list
            newNode.next = this.head;
            // Set the head property on the list to be that newly created node
            this.head = newNode;
        }
        // Increment the length by 1
        this.length++;
        // Return the linked list
        return this;
    }
}
