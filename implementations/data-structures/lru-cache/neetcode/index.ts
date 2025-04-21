class Node<K, V> {
    key: K;
    value: V;
    next: Node<K, V> | null;
    prev: Node<K, V> | null;
    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export default class LRUCache<K, V> {
    capacity: number;
    cache: Map<K, Node<K, V>>; // map key to node

    // Dummy Nodes:
    left: Node<K, V>; // LRU
    right: Node<K, V>; // most recent

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();

        this.left = new Node<K, V>(0 as K, 0 as V);
        this.right = new Node<K, V>(0 as K, 0 as V);

        this.left.next = this.right;
        this.right.prev = this.left;
    }
}
