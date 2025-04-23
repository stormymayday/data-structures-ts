function pivot(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1
): number {
    function swap(arr: number[], i: number, j: number): void {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const pivot = arr[start];
    let swapIdx = start;

    // Start from start + 1, go up to end (inclusive)
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }

    swap(arr, swapIdx, start);

    return swapIdx;
}

export default function quickSort(
    arr: number[],
    left: number = 0,
    right: number = arr.length - 1
): number[] {
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);

        // Left partition: from 'left' to 'pivotIndex - 1'
        quickSort(arr, left, pivotIndex - 1);

        // Right partition: from 'pivotIndex + 1' to 'right'
        quickSort(arr, pivotIndex + 1, right);
    }

    //  Base Case: left(index) is equal to or greater than right(index)
    return arr;
}
