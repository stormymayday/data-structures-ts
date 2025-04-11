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
}
