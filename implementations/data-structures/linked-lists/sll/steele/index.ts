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

    get(index: number): Node<T> | null {
        // If the index is less than zero or greater than or equal to the length of list, return null
        if (index < 0 || index >= this.length) {
            return null;
        }

        let counter = 0;
        let current: Node<T> | null = this.head;

        // Loop through the list until you reach the index
        while (counter !== index) {
            current = current!.next;
            counter++;
        }

        // Return node at specified index
        return current;
    }

    set(index: number, val: T): boolean {
        // Use 'get' method to find the specific node
        const foundNode = this.get(index);

        if (foundNode) {
            // If the node is found, set the value of that node to be the value passed to the function
            foundNode.val = val;
            //  and return true
            return true;
        } else {
            // If the node is not found, return false
            return false;
        }
    }

    insert(index: number, val: T): boolean {
        // If the index is less than zero or greater than the length, return false
        if (index < 0 || index > this.length) {
            return false;
        }

        // If the index is the same as length
        if (index === this.length) {
            // push new node to the end of the list
            this.push(val);
            return true;
        }

        // If the index is 0
        if (index === 0) {
            // unshift a new node to the start of the list
            this.unshift(val);
            return true;
        }

        // Otherwise, using the 'get' method, access the node at the index - 1
        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev?.next;
        prev!.next = newNode;
        newNode.next = temp as Node<T>;
        this.length++;
        return true;
    }

    remove(index: number): Node<T> | undefined {
        // If the index is less than zero or greater that the length return undefined
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        // If the index is 0, shift
        if (index === 0) {
            return this.shift();
        }

        // If the index is he same as the length - 1, pop
        if (index === this.length - 1) {
            return this.pop();
        }

        // Otherwise, using the 'get' method, access the node at the index - 1
        const previousNode = this.get(index - 1);
        const removed = previousNode!.next;
        // Set the next property on that node to be  the next of the next node
        previousNode!.next = removed!.next;
        // Decrement the length
        this.length--;
        // Return the removed node
        return removed as Node<T>;
    }

    reverse(): SinglyLinkedList<T> {
        // Create a variable called node and initialize it to the head property
        let node = this.head;
        // Swap the head and tail
        this.head = this.tail;
        this.tail = node;

        // Create a variable called prev
        let prev: Node<T> | null = null;

        // Create a variable called next
        let next: Node<T> | null = null;

        // Loop through the list
        for (let i = 0; i < this.length; i++) {
            // Set next to be the next property on whatever node is
            next = node!.next;
            // Set the next property of the node to be whatever prev is
            node!.next = prev;
            // Set prev to be the value of the node variable
            prev = node;
            // Set the node variable to be the value of next variable
            node = next;
        }
        // return the linked list
        return this;
    }

    rotate(k: number): SinglyLinkedList<T> {
        // Edge Case: if LL is empty
        if (!this.head) {
            return this;
        }

        // If k === this.length we can return
        if (k === this.length) {
            return this;
        }

        // Finding the actual number of rotations (if k > this.length)
        const numberOfRotations = k % this.length;

        // Finding the pivot / break point
        let current: Node<T> | null = this.head;
        for (let i = 0; i < this.length - numberOfRotations - 1; i++) {
            if (current.next !== null) {
                current = current.next;
            }
        }
        // at this point 'current' is at the pivot point (new tail)

        // point tail to the head
        this.tail!.next = this.head;

        // update head
        this.head = current.next;

        // update tail
        this.tail = current;

        // break the link at the pivot point
        current.next = null;

        return this;
    }
}
