export default class Queue<T> {
    private data: Array<T>;

    constructor() {
        this.data = [] as T[];
    }

    add(record: T): void {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }
}
