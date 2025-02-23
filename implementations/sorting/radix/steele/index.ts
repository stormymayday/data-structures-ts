export default function getDigit(num: number, place: number): number {
    // 1. Converting 'num' to absolute number (removes negative sign if it exists)
    // Time Complexity: O(1) (Simple arithmetic operation)
    // Space Complexity: O(1) (Single number stored)
    const absNum = Math.abs(num);

    // 2. Converting the number to a string
    // Time Complexity: O(d) (Converting number with 'd' digits to a string)
    // Space Complexity: O(d) (Storing string representation of the number)
    const absStr = absNum.toString();

    // 3. Getting the index
    // Time Complexity: O(1) (Simple arithmetic calculation)
    // Space Complexity: O(1) (Single number stored)
    const indexFromRight = absStr.length - 1 - place;

    // 4. If place is out of bounds (less than zero), return 0
    // Time Complexity: O(1) (Simple conditional check)
    // Space Complexity: O(1) (No extra storage used)
    if (indexFromRight < 0) {
        return 0;
    }

    // 5. Convert the character at the right index back to a number and return it
    // Time Complexity: O(1) (String character access is O(1), Number conversion is O(1))
    // Space Complexity: O(1) (Only a single number stored)
    return Number(absStr[indexFromRight]);

    // Final Time Complexity: O(d)
    // (Converting the number to a string dominates the runtime.)

    // Final Space Complexity: O(d)
    // (The function stores the entire number as a string, which requires O(d) space.)
}
