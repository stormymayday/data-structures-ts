export default function pivot(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1
) {
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
