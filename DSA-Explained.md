# Data Structures and Algorithms: Explained!

## Contents

1. [Recursive Algorithms](#Recursive)
1. [Big O Notation](#Big)
1. [Arrays](#Arrays)
1. [Linked Lists](#Linked)
1. [Stacks and Queues](#Stacks)
1. [Hash Maps](#Hash)
1. [Binary Search Trees](#Binary)
1. [Search Algorithms](#Search)
1. [Sorting Algorithms](#Sorting)

## Recursive Algorithms
### Quick Description
A function that calls itself. This can function similar to a loop. There will be a base case in a recursive function when it will stop calling itself.
### Usage Examples
Used for problems that can be broken into repetitions of smaller problems.

## Big O Notation
### Quick Description
Used to understand the processing time an algorithm can take, to show how things will scale when processing lots of data. O(1) is best, then O(log(n)), O(n), O(n^2), O(n^n). The "Big O" of an algorithms depends largely on how many times you need to iterate over the data to solve a problem.
### Usage Examples
To get an element from an array, no matter the length of the array, is always O(1). 


## Arrays
### Quick Descriptions
Begins with a defined number of containers ("_capacity") for the data, which can never be larger than its length. It also has a memory address where the array will be stored, allocated to the length of the array.
### Methods
Push, _resize, get, pop, insert, remove
### Usage Examples
`import memory from './memory'

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length === 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

Array.SIZE_RATIO = 3;`

## Linked Lists
### Quick Descriptions
A linked list linearly stores data in nodes. There is a node at the head of the list, which has a pointer to the next node in the list. The next node has a pointer to the following node in the list. There is no way to access a node without iterating through the list. If it is a doubly linked list, a node points to prev and next nodes.
### Methods
### Usage Examples

## Stacks and Queues
### Quick Descriptions
**Stacks** are **LIFO** (Last in first out), visualized vertically like a stack of plates. **Queues** are **FIFO** (First in first out).
### Methods
### Usage Examples

## Hash Maps
### Quick Descriptions
In a hash map, items are put in place based on a hash function that determines their location. The data can then be called at any time using the hash function to find. When two or more items hash to the same place, they can either use separate chaining and all link to the same location, or the next items to be added to the same hash can find the nearest available space.
### Methods
### Usage Examples

## Binary Search Trees
### Quick Descriptions
Has a root node at the top of the tree, and then each node can only have a left and right child. Left children must be less than the parent node, and right children must be greater than the parent node.
### Methods
### Usage Examples

## Search Algorithms
### Quick Descriptions
Algorithms for searching through arrays and trees.
### Usage Examples
Linear search: Going through each item until you find the data you want.
Binary search: AKA Divide and conquer, works with sorted arrays. Recurses to cut data in half each time until it finds the value in question.
Depth-First Search(DFS): Searches all the way down the left side branch recursively, then add the values at the current node to the array, then recursively search the right side branch. (O(n) because each node needs to be visited)
Breadth-first Search(BFS): Searches by row of the tree, starting with top row. Using a queue, values get added to the queue in order of each row, and then dequeued and added to the values array, which is finally returned at the end of the algorithm.


## Sorting Algorithms
### Quick Descriptions
Different methods for sorting an array.
### Methods
- Bubble Sort
- Merge Sort
- Quicksort
### Usage Examples
#### Bubble Sort: O(n^2)
`function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};`

#### Merge Sort: O(nlog(n))

`function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};`

#### Quicksort: O(nlog(n))

`function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};`