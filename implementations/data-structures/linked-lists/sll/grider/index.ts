class Node<T> {
    data: T;
    next: Node<T> | null;
    constructor(data: T, node: Node<T> | null = null) {
        this.data = data;
        this.next = node;
    }
}

export default class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    insertFirst(data: T): void {
        this.head = new Node(data, this.head);
    }

    size(): number {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(): Node<T> | null {
        return this.head;
    }

    getLast(): Node<T> | null {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
        // had to add this line
        return node;
    }

    clear(): void {
        this.head = null;
    }

    removeFirst(): void {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast(): void {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data: T): void {
        const last = this.getLast();
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index: number): Node<T> | null {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        // index is out of bounds
        return null;
    }

    removeAt(index: number): void {
        // Edge Case 1: Empty List
        if (!this.head) {
            return;
        }

        // Edge Case 2: First Item
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        // Edge Case 3: Index out of bounds
        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }
}
