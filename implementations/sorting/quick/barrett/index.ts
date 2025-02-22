function swap(array: number[], firstIndex: number, secondIndex: number) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

export default function pivot(
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
