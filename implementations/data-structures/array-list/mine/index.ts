export default class ArrayList<T> {
    data: Record<string, T>;
    length: number;

    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item: T): number {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        const firstItem = this.data[0];

        // Shift all elements to the left
        for (let i = 1; i < this.length; i++) {
            this.data[i - 1] = this.data[i];
        }

        // Remove the last item after shifting
        delete this.data[this.length - 1];

        this.length--;

        return firstItem;
    }

    unshift(item: T): number {
        // Shift all elements one position to the right
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        // Insert the new item at index 0
        this.data[0] = item;
        // Increase the length
        this.length++;
        return this.length;
    }

    get(index: number): T | undefined {
        // Checking if index is within bounds
        if (index >= 0 && index < this.length) {
            return this.data[index];
        }
        return undefined;
    }

    forEach() {}

    map() {}

    filter() {}

    reduce() {}

    slice() {}

    splice() {}

    concat() {}

    square() {}

    at() {}

    includes() {}

    indexOf() {}

    join() {}
}
