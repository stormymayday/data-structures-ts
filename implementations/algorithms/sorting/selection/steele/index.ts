export default function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        // Store the first element as the smallest value seen so far
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            // Compare this item to the next item in the array util the smaller number is found
            if (arr[j] < arr[lowest]) {
                // If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array
                lowest = j;
            }
        }

        // If the 'minimum' is not the initial value (index), swap the values
        if (i !== lowest) {
            const temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
        // Repeat with the next element until the array is sorted
    }

    return arr;
}
