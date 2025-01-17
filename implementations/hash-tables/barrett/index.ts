export default class HashTable<T> {
    dataMap: Array<T>;

    constructor(size: number = 7) {
        this.dataMap = new Array(size);
    }

    private _hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }
}
