/**
 * A hash table implementation using Separate Chaining for collision handling.
 */
export default class HashTable<T> {
    /**
     * The underlying data structure for the hash table.
     * Each index holds an array of key-value pairs to handle collisions.
     */
    dataMap: Array<[string, T][]>;

    /**
     * Creates an instance of a hash table.
     * @param {number} [size=7] The number of buckets (slots) in the hash table.
     */
    constructor(size: number = 7) {
        // Creates an array with `size` slots, initially filled with `undefined`.
        this.dataMap = new Array(size);
    }

    /**
     * Generates a hash value (index) for a given key.
     *
     * @param {string} key The key to hash.
     * @returns {number} The hash value (index in the `dataMap` array).
     *
     * @remarks
     * This function processes each character in the key string to compute a numeric hash value.
     * The hash value is calculated as:
     *
     * 1. Start with an initial value of `0`.
     * 2. For each character in the key, multiply its Unicode value by `23` (a prime multiplier).
     * 3. Add this to the running total and use modulo (`%`) to keep the value within bounds of the `dataMap` length.
     *
     * This approach ensures that:
     * - Keys are distributed across available buckets.
     * - The hash function is deterministic (same key always hashes to the same index).
     *
     * **Example**:
     * For `key = "cat"` and `this.dataMap.length = 7`:
     * - `'c'` contributes `(0 + 99 * 23) % 7 = 2`.
     * - `'a'` contributes `(2 + 97 * 23) % 7 = 6`.
     * - `'t'` contributes `(6 + 116 * 23) % 7 = 1`.
     * - Final hash is `1`.
     */
    private _hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    /**
     * Adds a key-value pair to the hash table.
     *
     * @param {string} key The key to associate with the value.
     * @param {T} value The value to store in the hash table.
     * @returns {this} The current instance of the hash table, for chaining.
     *
     * @remarks
     * The `set` method calculates the index for the given key using the `_hash` method.
     * If a collision occurs (multiple keys map to the same index), the key-value pair is added to the existing subarray.
     *
     * Steps:
     * 1. Compute the hash value for the key to determine the bucket index.
     * 2. If the bucket at the index is uninitialized, create an empty array to store key-value pairs.
     * 3. Add the `[key, value]` pair to the subarray at that index.
     *
     * **Example**:
     * For a hash table with `dataMap.length = 7`:
     * - `set("cat", "feline")` stores `["cat", "feline"]` at index `1` (computed by `_hash`).
     * - `set("dog", "canine")` stores `["dog", "canine"]` at another index.
     * - `set("act", "action")` may share the same index as `"cat"` due to a collision but is stored in the same bucket.
     */
    set(key: string, value: T) {
        // Compute the index using the hash function.
        const index = this._hash(key);

        // If the bucket at the computed index is not initialized, create an empty array.
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }

        // Add the key-value pair to the array at the computed index.
        this.dataMap[index].push([key, value]);

        // Return `this` to allow method chaining.
        return this;
    }

    /**
     * Retrieves the value associated with the given key in the hash table.
     *
     * @param {string} key The key whose associated value is to be retrieved.
     * @returns {T | undefined} The value associated with the key, or `undefined` if the key doesn't exist.
     *
     * @remarks
     * The `get` method uses the hash function to compute the index for the provided key and checks if the key exists in the corresponding bucket.
     * If the key is found, the associated value is returned. If the key is not found or the bucket is empty, the method returns `undefined`.
     *
     * **Example**:
     * For a hash table with `dataMap.length = 7`:
     * - `get("cat")` retrieves the value associated with the key `"cat"` at the appropriate index.
     * - `get("dog")` retrieves the value for `"dog"`, or returns `undefined` if the key is not present.
     */
    get(key: string) {
        const index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    if (this.dataMap[i][j].length) {
                        keys.push(this.dataMap[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }
}
