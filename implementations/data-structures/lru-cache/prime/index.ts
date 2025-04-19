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
        // this.get(key)
        // If it doesn't, we need to insert
        // - check capacity and evict if over
        // If it does, we need to update to the value and move it to the front of the list
    }

    get(key: K): V | undefined {
        // 1. check the cache for existence
        // 2. update the value found and move it to the front of the list
        // 3. return the value found or undefined if it does not exist
    }
}
