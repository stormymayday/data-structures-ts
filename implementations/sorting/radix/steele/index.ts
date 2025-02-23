export default function getDigit(num: number, place: number): number {
    // Step 1: Convert number to absolute value to handle negative numbers
    const absNum = Math.abs(num);

    // Step 2: Shift the desired digit to the ones place by dividing by 10^place
    // Example: If num = 98765 and place = 2, then 98765 / 100 = 987.65
    const shiftedNum = absNum / Math.pow(10, place);

    // Step 3: Extract the rightmost digit using modulo 10
    // Example: 987.65 % 10 gives 7.65, and Math.floor(7.65) = 7
    return Math.floor(shiftedNum % 10);
}
