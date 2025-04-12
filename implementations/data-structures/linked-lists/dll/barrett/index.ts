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
}
