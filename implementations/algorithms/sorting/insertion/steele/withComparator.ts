export default function insertionSort<T>(
    arr: T[],
    comparator?: (a: T, b: T) => number
): T[] {
    if (typeof comparator !== "function") {
        comparator = (a, b) => {
            if (a > b) {
                return 1;
            } else if (b > a) {
                return -1;
            } else {
                return 0;
            }
        };
    }

    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i];

        let j = i - 1;
        for (; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }

    return arr;
}
