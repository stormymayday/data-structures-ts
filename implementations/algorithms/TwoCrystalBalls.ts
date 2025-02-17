export default function two_crystal_balls(breaks: boolean[]): number {
    // Calculate the optimal jump size - the square root of the array length
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    // Using the first crystal ball, we jump by jumpAmount until we find a breaking point.

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // Once we find a breaking point, we go back one jump.
    // This takes us to the last known safe floor.
    i -= jumpAmount;

    // Using the second crystal ball, we walk forward one floor at a time from the last safe point until we find the exact breaking floor.
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    // If we never found a breaking point
    return -1;
}

// First phase: We make at most √n jumps
// Second phase: We walk at most √n steps
// Total: O(2√n) = O(√n)

// This is much better than binary search (O(log n)) with one ball, because with binary search, if the first ball breaks, we'd have to do linear search from the start up to that point.
