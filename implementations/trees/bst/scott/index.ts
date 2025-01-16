class Node<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BST<T> {
    root: Node<T> | null;
    constructor() {
        this.root = null;
    }
}
