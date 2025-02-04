export default class MaxHeap {
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

    insert(value: number) {
        this.heap.push(value);
        let current = this.heap.length - 1;

        while (
            // Condition 1: current is at NOT the root
            current > 0 &&
            // Condition 2: value at current is greater that it's parent
            this.heap[current] > this.heap[this.parent(current)]
        ) {
            // 1. Swap value at current with it's parent
            this.swap(current, this.parent(current));

            // Moving current to it's parent's position
            current = this.parent(current);
        }
    }
}
