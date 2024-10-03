/**
 * 
 * @param {} input 
 * @returns 
 * 
 * mono stack template
 */

function monoStack(insertEntries) {
    const stack = [];
    for (let entry of insertEntries) {
        while (stack.length > 0 && stack[stack.length - 1] <= entry) {
            stack.pop();
            // Do something with the popped item here
        }
        stack.push(entry);
    }
}