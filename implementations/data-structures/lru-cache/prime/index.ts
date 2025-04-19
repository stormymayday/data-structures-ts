// Doubly linked list node structure
type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

function createNode<V>(value: V): Node<V> {
    return { value };
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private lookup: Map<K, Node<V>>; // Maps keys to nodes for O(1) access
    private reverseLookup: Map<Node<V>, K>; // Maps nodes back to keys - needed for O(1) eviction of LRU items
    // Without reverseLookup, we would need to scan the entire lookup map to find which key
    // corresponds to the tail node when removing the least recently used item

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;

        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        // Does it exist?
        let node = this.lookup.get(key);
        // If it doesn't
        if (!node) {
            // we need to insert
            node = createNode(value);
            this.length++;
            this.prepend(node);
            // check capacity and evict if over
            this.trimCache();
        }
        // If it does
        else {
            // we need to update to the value and move it to the front of the list
            this.detach(node);
            this.prepend(node);
        }
    }

    get(key: K): V | undefined {
        // 1. check the cache for existence
        const node = this.lookup.get(key);
        if (!node) {
            // doesn't exist
            return undefined;
        }
        // 2. Move the node to the front of the list
        this.detach(node);
        this.prepend(node);

        // 3. return the value found
        return node.value;
    }

    detach(node: Node<V>): void {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        // Edge Cases: Head & Tail
        if (this.head === node) {
            this.head = this.head.next;
        }
        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        node.next = undefined;
        node.prev = undefined;
    }

    prepend(node: Node<V>): void {
        // If the list is empty
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        // Connect node to current head
        node.next = this.head;
        this.head.prev = node;
        // Update head pointer
        this.head = node;
    }

    trimCache(): void {
        // If we're under capacity, do nothing
        if (this.length <= this.capacity) {
            return;
        }

        const tail = this.tail as Node<V>;

        this.detach(this.tail as Node<V>);

        const key = this.reverseLookup.get(tail) as K;

        this.lookup.delete(key);

        this.reverseLookup.delete(tail);

        this.length--;
    }
}
