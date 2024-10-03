/**
 * 
 * @param {} input 
 * @returns 
 * 
 * sliding window flexible shortest template
 */

function slidingWindowFlexibleShortest(input) {
    initialize window, ans
    var left = 0;
    for (var right = 0; right < input.length; ++right) {
        append input[right] to window
        while (valid(window)) {
            ans = Math.min(ans, window);   // window is guaranteed to be valid here
            remove input[left] from window
            ++left;
        }
    }
    return ans;
}