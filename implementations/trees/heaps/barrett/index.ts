export default class Heap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    getHeap() {
        return [...this.heap];
    }
}
