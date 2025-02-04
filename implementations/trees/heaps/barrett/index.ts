export default class Heap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    getHeap() {
        return [...this.heap];
    }

    private leftChild(index: number) {
        // root at index 1
        // return 2 * index;

        // root at index 0
        return 2 * index + 1;
    }

    private rightChild(index: number) {
        // root at index 1
        // return 2 * index + 1;

        // root at index 0
        return 2 * index + 2;
    }
}
