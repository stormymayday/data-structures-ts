function merge(array1: number[], array2: number[]): number[] {
    const combined = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        combined.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        combined.push(array2[j]);
        j++;
    }
    return combined;
}

export default function mergeSort(array: number[]): number[] {
    // Could cause issue if called on an empty array
    // array.length <= 1 should be safer
    if (array.length === 1) {
        return array;
    }

    const midIndex = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, midIndex));
    const right = mergeSort(array.slice(midIndex));

    return merge(left, right);
}
