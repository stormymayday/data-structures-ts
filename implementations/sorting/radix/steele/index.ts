export function getDigit(num: number, place: number): number {
    // Step 1: Convert the number to its absolute value to handle negative numbers
    // Step 2: Shift the desired digit to the ones place by dividing by 10^place
    // Step 3: Use modulo 10 to extract the rightmost digit, then floor it to ensure it's an integer
    return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);

    // Explanation:
    // Math.abs(num) – This ensures the number is positive, regardless of whether it's negative.
    // Math.pow(10, place) – This calculates 10^place, which is used to shift the digits.
    // Division (/) – Dividing by 10^place shifts the desired digit to the ones place.
    // Modulo (% 10) – This extracts the rightmost digit.
    // Math.floor() – This ensures that we return an integer, removing any decimal parts.
}

export function digitCount(num: number): number {
    // Step 1: Handle the edge case when num is 0 (0 has 1 digit)
    if (num === 0) {
        return 1;
    }

    // Step 2: Take the absolute value of num to handle negative numbers
    // Step 3: Use Math.log10(num) to get the base-10 logarithm of the number
    // Step 4: Math.floor is used to remove the decimal part, leaving the integer portion
    // Step 5: Add 1 because logarithm gives the number of digits minus 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
