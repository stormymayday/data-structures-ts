export default class Queue<T> {
    private data: Array<T>;

    constructor() {
        this.data = [] as T[];
    }

    add(record: T): void {
        this.data.unshift(record);
    }

    remove(): T | undefined {
        return this.data.pop();
    }

    peek(): T | undefined {
        return this.data[this.data.length - 1];
    }
}
