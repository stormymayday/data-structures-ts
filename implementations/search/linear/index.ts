export default function linearSearch(arr: number[], target: number) {
    if (!arr.length) {
        return -1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }

    return -1;
}
