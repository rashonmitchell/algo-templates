### One Pager Cheat Sheet


#### This cheat sheet provides a quick summary of time complexity of common array operations and a reminder on Big O notation.

#### A Dynamic array, also known as an array list, list, growable array, resizable array, mutable array or dynamic table, is a type of array that can resize itself and provides constant time access with O(n) worst-case insertion (append) and deletion.

#### A Linked List is a linear collection of elements ordered by links instead of physical placement in memory, featuring optimized operations for insertion and deletion but with costly access and search time complexity.

#### A Queue is a FIFO data structure usually implemented on top of a linked list for O(1) enqueuing and dequeuing.

#### A Stack is a sequential collection where elements are added and removed from the same end, making insertions and deletions O(1) but access and search O(n).

#### A hash table is an unordered collection that maps keys to values using hashing for quick search, insertion and deletion with average time complexity O(1).

#### A Graph is a data structure that stores items in a connected, non-hierarchical network, connected by edges, which can be directed or undirected, cyclic or acyclic, and weighted or unweighted.

#### A Tree is a hierarchical data structure composed of nodes connected through links, which can be used for indexing files, syntax trees, comment threads, and more, with O(log(n)) average time complexity for most operations.

#### A Binary Search Tree is a kind of binary tree where nodes to the left are smaller, and nodes to the right are larger than the current node.





## Javascript Array's and array methods:
- [ ] [1, 2, 3, 4].concat([5, 6, 7, 8]) // [1, 2, 3, 4, 5, 6, 7, 8] => concat(arr1,[...]) // Joins two or more arrays and returns a copy of the joined arrays
- [ ] copyWithin(target, [start], [end]) // Copies array elements within the array, to and from specified positions
- [ ] entries() // Returns a key/value pair Array Iteration Object
- [ ] every(function(currentVal, [index], [arr]), [thisVal]) // Checks if every element in an array pass a test
- [ ] fill(val, [start], [end]) // Fill the elements in an array with a static value
- [ ] filter(function(currentVal, [index], [arr]), [thisVal]) // Creates a new array with every element in an array that pass a test
- [ ] find(function(currentVal, [index], [arr]), [thisVal]) // Returns the value of the first element in an array that pass a test
- [ ] findIndex(function(currentVal, [index],[arr]), [thisVal]) // Returns the index of the first element in an array that pass a test
- [ ] forEach(function(currentVal, [index],[arr]),[thisVal]) // Calls a function for each array element
- [ ] from(obj,[mapFunc], [thisVal]) // Creates an array from an object
- [ ] includes(element, [start]) // Check if an array contains the specified element
- [ ] indexOf(element, [start]) // Search the array for an element and returns its position
- [ ] isArray(obj) // Checks whether an object is an array
- [ ] join([separator]) // Joins all elements of an array into a string
- [ ] keys() // Returns a Array Iteration Object, containing the keys of the original array
- [ ] lastIndexOf(element, [start]) // Search the array for an element, starting at the end, and returns its position
- [ ] map(function(currentVal, [index], [arr]), [thisVal]) // Creates a new array with the result of calling a function for each array element
- [ ] [1, 2, 3, 4].pop() // [1, 2, 3] => pop() // Removes the last element of an array, and returns that element
- [ ] push(item1,[...]) // Adds new elements to the end of an array, and returns the new length
- [ ] reduce(function(total, currentVal, [index], [arr]), [initVal]) // Reduce the values of an array to a single value (going left-to-right)
- [ ] reduceRight(function(total, currentVal, [index], [arr]), [initVal]) // Reduce the values of an array to a single value (going right-to-left)
- [ ] reverse() // Reverses the order of the elements in an array
- [ ] shift() // Removes the first element of an array, and returns that element
- [ ] slice([start], [end]) // Selects a part of an array, and returns the new array
- [ ] some(function(currentVal, [index], [arr]), [thisVal]) // Checks if any of the elements in an array pass a test
- [ ] sort([compareFunc]) // Sorts the elements of an array
- [ ] splice(index, [quantity], [item1, ...]) // Adds/Removes elements from an array
- [ ] toString() // Converts an array to a string, and returns the result
- [ ] unshift(item1, ...) // Adds new elements to the beginning of an array, and returns the new length
- [ ] valueOf() // Returns the primitive value of an array