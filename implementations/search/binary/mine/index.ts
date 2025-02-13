export default function binarySearch(arr: number[], target: number): number {
    if (!arr.length || target < arr[0] || target > arr[arr.length - 1]) {
        return -1;
    }

    if (arr.length === 1) {
        // If the array has only one element, check if it's equal to the target.
        // If it matches the target, return its index (0).
        // Otherwise, return -1, indicating the target is not in the array.
        return arr[0] === target ? 0 : -1;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (target === arr[middle]) {
            return middle;
        } else if (target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}
