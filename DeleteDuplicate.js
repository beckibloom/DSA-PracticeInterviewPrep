// Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

// Input (linked list): 1 > 2 > 3 > 3 > 4 > 5
// Output (linked list): 1 > 2 > 3 > 4 > 5

// iterate through the items, and if the value of the current node = node.next, then delete the current node, changing the .next pointer of the prev node to the node.next (skipping current node)

function(list) {
  let prevNode = null;
  let currNode = list.head;
  let nextNode = list.head.next;
  while (node.next !== null) {
    if (currNode === nextNode) {
      if (prevNode = null) {
        list.head = nextNode;
      } else {
        prevNode.next = nextNode
      }
    } else {
      prevNode = currNode;
      currNode = nextNode;
      nextNode = nextNode.next;
    }
  }
}
