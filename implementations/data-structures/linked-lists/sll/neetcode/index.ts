/**
 * Singly Linked List Node
 */
class ListNode {
    val: number;
    next: ListNode | null;

    /**
     * @param val - Value of the node
     * @param nextNode - Reference to the next node
     */
    constructor(val: number, nextNode: ListNode | null = null) {
        this.val = val;
        this.next = nextNode;
    }
}

/**
 * Implementation for Singly Linked List
 */
export default class LinkedList {
    head: ListNode;
    tail: ListNode;

    constructor() {
        /**
         * Initialize the list with a 'dummy' node, which makes
         * removing a node from the beginning of list easier.
         */
        this.head = new ListNode(-1);
        this.tail = this.head;
    }
}
