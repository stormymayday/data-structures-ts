export default function getDigit(num: number, place: number): number {
    // Step 1: Convert Number to Absolute Value
    const absNum = Math.abs(num);

    // Step 2: Raise 10 to the power of the 'place'
    const tenToThePowerOfPlace = Math.pow(10, place);

    // Step 3: Shift the number to the right so that the desired digit is at the ones place
    const shiftedNum = absNum / tenToThePowerOfPlace;

    // Step 4: Extract the Rightmost Digit Using Modulo (% 10)
    const rightmostDigit = Math.floor(shiftedNum) % 10;

    // Step 5: Return the extracted digit
    return rightmostDigit;
}
