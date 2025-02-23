export default function getDigit(num: number, place: number): number {
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
