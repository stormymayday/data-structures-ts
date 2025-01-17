export default class HashTable<T> {
    data: Array<[string, T][]>;

    constructor(size: number) {
        this.data = new Array(size);
    }

    _hash(key: string) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
}
