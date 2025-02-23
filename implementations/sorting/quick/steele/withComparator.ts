function swap<T>(arr: T[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function pivot<T>(
    arr: T[],
    comparator?: (a: T, b: T) => number,
    start: number = 0,
    end: number = arr.length - 1
) {
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

    const pivotIndex = start;
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (comparator(arr[i], arr[pivotIndex]) < 0) {
            swapIndex++;
            if (i !== swapIndex) {
                swap(arr, i, swapIndex);
            }
        }
    }

    if (pivotIndex !== swapIndex) {
        swap(arr, pivotIndex, swapIndex);
    }

    return swapIndex;
}

export default function quickSort<T>(
    arr: T[],
    comparator?: (a: T, b: T) => number,
    left: number = 0,
    right: number = arr.length - 1
) {
    if (left < right) {
        const pivotIndex = pivot(arr, comparator, left, right);
        quickSort(arr, comparator, left, pivotIndex - 1);
        quickSort(arr, comparator, pivotIndex + 1, right);
    }

    return arr;
}
