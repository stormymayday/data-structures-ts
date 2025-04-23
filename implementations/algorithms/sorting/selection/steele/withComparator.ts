export default function selectionSort<T>(
    arr: T[],
    comparator?: (a: T, b: T) => number
): T[] {
    if (typeof comparator !== "function") {
        comparator = (a: T, b: T): number => {
            if (a > b) {
                return 1;
            } else if (b > a) {
                return -1;
            } else {
                return 0;
            }
        };
    }

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[lowest], arr[j]) > 0) {
                lowest = j;
            }
        }

        if (lowest !== i) {
            const temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    return arr;
}
