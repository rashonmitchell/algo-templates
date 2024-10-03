/**
 * 
 * @param {} input 
 * @returns 
 * 
 * bfs on graph template
 */

function bfs(root) {
    let queue = [root];
    let visited = new Set([root]);
    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of get_neighbors(node)) {
            if (visited.has(neighbor)) continue;
            queue.push(neighbor);
            visited.add(neighbor);
        }
    }
}