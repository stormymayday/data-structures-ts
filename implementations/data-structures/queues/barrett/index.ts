class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export default class Queue {
    first: ListNode | null;
    last: ListNode | null;
    length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value: number): Queue {
        const newNode = new ListNode(value);

        // check if queue is empty
        if (this.length === 0) {
            // queue is empty
            this.first = newNode;
            this.last = newNode;
        } else {
            // queue is not empty
            this.last!.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(): ListNode | undefined {
        // check if queue is empty
        if (this.length === 0) {
            return undefined;
        }

        const temp = this.first;
        this.first = this.first!.next;
        temp!.next = null;
        this.length--;
        if (this.length === 0) {
            this.last = null;
        }
        return temp as ListNode;
    }
}
