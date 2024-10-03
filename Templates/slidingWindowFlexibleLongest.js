/**
 * 
 * @param {} input 
 * @returns 
 * 
 * sliding window flexible longest template
 */


function slidingWindowFlexibleLongest(input) {
    initialize window, ans
    var left = 0;
    for (var right = 0; right < input.length; ++right) {
        append input[right] to window
        while (invalid(window)) {
            remove input[left] from window
            ++left;
        }
        ans = Math.max(ans, window);       // window is guaranteed to be valid here
    }
    return ans;
}