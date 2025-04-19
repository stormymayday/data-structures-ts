export default class LRU<K, V> {
    private length: number;

    constructor() {}

    update(key: K, value: V): void {
        // Does it exist?
        // this.get(key)
        // If it doesn't, we need to insert
        // - check capacity and evict if over
        // If it does, we need to update to the value and move it to the front of the list
    }

    get(key: K): V | undefined {
        // 1. check the cache for existence
        // 2. update the value found and move it to the front of the list
        // 3. return the value found or undefined if it does not exist
    }
}
