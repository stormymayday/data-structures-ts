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
