function swap(array: number[], firstIndex: number, secondIndex: number): void {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function pivot(
    array: number[],
    pivotIndex: number = 0,
    endIndex: number = array.length - 1
): number {
    let swapIndex = pivotIndex;

    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }

    swap(array, pivotIndex, swapIndex);

    return swapIndex;
}

export default function quickSort(
    array: number[],
    left = 0,
    right = array.length - 1
) {
    if (left >= right) {
        return array;
    }
    const pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);

    return array;
}
