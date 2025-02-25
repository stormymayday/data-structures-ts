class Node {
    val: number;
    next: Node | null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

export default class SinglyLinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
