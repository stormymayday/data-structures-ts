export default class HashTable<T> {
    dataMap: Array<T>;

    constructor(size: number = 7) {
        this.dataMap = new Array(size);
    }
}
