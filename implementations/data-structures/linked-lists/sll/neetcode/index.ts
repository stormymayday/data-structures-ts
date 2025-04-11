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

    /**
     * Retrieve value at index
     * @param index - Index to retrieve value from
     * @returns Value at index or -1 if index is out of bounds
     */
    get(index: number): number {
        // Due to the 'dummy' node
        let curr = this.head.next;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.val;
            }
            i++;
            curr = curr.next;
        }
        // Index out of bounds or list is empty
        return -1;
    }
}
