class Node<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;
    constructor(value: T) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value: T): DoublyLinkedList<T> {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(): Node<T> | undefined {
        if (this.length === 0) {
            return undefined;
        }
        const temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail!.prev;
            this.tail!.next = null;
            temp!.prev = null;
        }
        this.length--;
        return temp as Node<T>;
    }

    unshift(value: T): DoublyLinkedList<T> {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(): Node<T> | undefined {
        if (this.length === 0) {
            return undefined;
        }
        const temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head!.next;
            this.head!.prev = null;
            temp!.next = null;
        }
        this.length--;
        return temp as Node<T>;
    }

    get(index: number): Node<T> | undefined {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp!.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp!.prev;
            }
        }
        return temp as Node<T>;
    }
}
