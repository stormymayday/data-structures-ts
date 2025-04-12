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
        // skipping past the 'dummy' node
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
        // 1. Creating a new node
        const newNode = new ListNode(val);
        // 2. Pointing newNodes next to the 'dummy' node's next (could be null)
        newNode.next = this.head.next;
        // 3. Pointing 'dummy' node's next to the newNode
        this.head.next = newNode;
        // Edge Case: list was empty before insertion
        if (!newNode.next) {
            // Pointing tail to the newNode
            this.tail = newNode;
        }
    }

    /**
     * Insert a new node at the tail
     * @param val - Value to insert
     */
    insertTail(val: number): void {
        // 1. Creating a new node and pointing tail's 'next' pointer at it
        this.tail.next = new ListNode(val);
        // 2. Pointing tail to the new node
        this.tail = this.tail.next;
        // Works for when the list is empty and non-empty
    }

    /**
     * Remove node at index
     * @param index - Index to remove node from
     * @returns True if removal was successful, false otherwise
     */
    remove(index: number): boolean {
        let i = 0;

        // Starting at the 'dummy' node
        let curr: ListNode | null = this.head;

        // Therefore, curr ends up on the node before the target
        while (i < index && curr) {
            // While 'i' is less than the 'index' AND 'curr' is not null
            i++;
            curr = curr.next;
        }

        // if curr and target exist ('index' is not out of bounds)
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
        // index was out of bounds
        return false;
    }

    /**
     * Retrieve all values in the list
     * @returns An array containing all values in the list
     */
    getValues(): number[] {
        // Skipping the 'dummy' node
        let curr = this.head.next;
        const res: number[] = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}
