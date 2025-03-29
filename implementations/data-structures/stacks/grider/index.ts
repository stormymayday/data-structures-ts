export default class Stack<T> {
    private data: Array<T>;

    constructor() {
        this.data = [];
    }

    push(record: T): void {
        this.data.push(record);
    }

    pop(): T | undefined {
        return this.data.pop();
    }

    peek(): T | undefined {
        return this.data[this.data.length - 1];
    }
}
