export default function insertionSort(arr: number[]): number[] {
    // iterate through the array, starting from index 1, assuming the first element is already sorted.
    for (let i = 1; i < arr.length; i++) {
        // store the currentVal (element at i).
        const currentVal = arr[i];

        // loop backwards
        let j = i - 1;
        for (; j >= 0 && arr[j] > currentVal; j--) {
            // move elements that are greater than currentVal forward in the array.
            arr[j + 1] = arr[j];
        }

        // after the loop finishes we found the correct sport for currentVal
        // insert currentVal into its correct position
        // one position after j's initial position
        arr[j + 1] = currentVal;
    }

    // return the sorted array
    return arr;
}
