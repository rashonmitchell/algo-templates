/**
 * 
 * @param {} input 
 * @returns 
 * 
 * sliding window fixed template
 */

function slidingWindowFixed(input, windowSize) {
    ans = window = input.slice(0, windowSize);
    for (const right = windowSize; right < input.length; ++right) {
        const left = right - windowSize;
        remove input[left] from window
        append input[right] to window
        ans = optimal(ans, window);
    }
    return ans
}