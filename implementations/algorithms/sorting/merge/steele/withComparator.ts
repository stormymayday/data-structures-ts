function merge<T>(
    arr1: T[],
    arr2: T[],
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

    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (comparator(arr1[i], arr2[j]) <= 0) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

export default function mergeSort<T>(
    arr: T[],
    comparator: (a: T, b: T) => number = (a: T, b: T): number => {
        if (typeof a === "number" && typeof b === "number") {
            return a - b;
        }
        throw new Error(
            "Default comparator only works with numbers. Please provide a custom comparator for other types."
        );
    }
): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const middle: number = Math.floor(arr.length / 2);
    const left: T[] = mergeSort(arr.slice(0, middle), comparator);
    const right: T[] = mergeSort(arr.slice(middle), comparator);

    return merge(left, right, comparator);
}
