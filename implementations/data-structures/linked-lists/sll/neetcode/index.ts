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

    /**
     * Insert a new node at the head
     * @param val - Value to insert
     */
    insertHead(val: number): void {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (!newNode.next) {
            // If list was empty before insertion
            this.tail = newNode;
        }
    }

    /**
     * Insert a new node at the tail
     * @param val - Value to insert
     */
    insertTail(val: number): void {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * Remove node at index
     * @param index - Index to remove node from
     * @returns True if removal was successful, false otherwise
     */
    remove(index: number): boolean {
        let i = 0;
        let curr: ListNode | null = this.head;
        // Move curr to node before target
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }

        // if curr and target exist
        if (curr && curr.next) {
            // if target is the tail
            if (curr.next === this.tail) {
                // move tail back
                this.tail = curr;
            }
            // Remove the node ahead of curr
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * Retrieve all values in the list
     * @returns An array containing all values in the list
     */
    getValues(): number[] {
        let curr = this.head.next;
        const res: number[] = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
