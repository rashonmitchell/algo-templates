function slidingWindowFixed(input, windowSize) {
    var ans = window = input.slice(0, windowSize);
    for (var right = windowSize; right < input.length; ++right) {
        const left = right - windowSize;
        // remove input[left] from window
        // append input[right] to window
        ans = optimal(ans, window);
    }
    return ans;
}