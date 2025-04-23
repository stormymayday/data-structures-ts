export default function selectionSort(array: number[]): number[] {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            const temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}
