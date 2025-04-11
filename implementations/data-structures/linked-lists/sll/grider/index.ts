export class Node<T> {
    data: T;
    next: Node<T> | null;
    constructor(data: T, node: Node<T> | null = null) {
        this.data = data;
        this.next = node;
    }
}
