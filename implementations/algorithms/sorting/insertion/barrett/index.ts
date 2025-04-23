export default function insertionSort(array: number[]): number[] {
    for (let i = 1; i < array.length; i++) {
        const temp = array[i];
        // eslint-disable-next-line no-var
        for (var j = i - 1; array[j] > temp && j > -1; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}
