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

    get(key: K): V | undefined {
        const node = this.cache.get(key);

        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.append(node);
        return node.value;
    }

    put(key: K, value: V): void {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            if (node) {
                this.detach(node);
            }
        }

        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.append(newNode);

        if (this.cache.size > this.capacity) {
            const lru = this.left.next;
            if (lru) {
                this.detach(lru);
                this.cache.delete(lru.key);
            }
        }
    }

    detach(node: Node<K, V>): void {
        const prev = node.prev;
        const next = node.next;
        if (prev) {
            prev.next = next;
        }
        if (next) {
            next.prev = prev;
        }
    }

    append(node: Node<K, V>): void {}
}
