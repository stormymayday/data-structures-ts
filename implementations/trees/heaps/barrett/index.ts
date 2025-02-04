export default class Heap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    getHeap() {
        return [...this.heap];
    }

    private leftChild(index: number): number {
        // root at index 1
        // return 2 * index;

        // root at index 0
        return 2 * index + 1;
    }

    private rightChild(index: number): number {
        // root at index 1
        // return 2 * index + 1;

        // root at index 0
        return 2 * index + 2;
    }

    private parent(index: number): number {
        // root at index 1
        // return Math.floor(index / 2);

        // root at index 0
        return Math.floor((index - 1) / 2);
    }

    private swap(index1: number, index2: number): void {
        [this.heap[index1], this.heap[index2]] = [
            this.heap[index2],
            this.heap[index1],
        ];
    }
}
