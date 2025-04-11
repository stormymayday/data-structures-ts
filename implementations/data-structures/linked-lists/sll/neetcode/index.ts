/**
 * Singly Linked List Node
 */
export default class ListNode {
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
