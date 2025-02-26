export default class ArrayList<T> {
    data: Record<string, T>;
    length: number;

    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index: number): T | undefined {
        // Checking if index is within bounds
        if (index >= 0 && index < this.length) {
            return this.data[index];
        }
        return undefined;
    }

    push() {}

    pop() {}

    shift() {}

    unshift() {}

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
