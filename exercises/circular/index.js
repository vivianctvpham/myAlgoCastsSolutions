// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  // Have to trackers running through the list
  let slow = list.getFirst();
  let fast = list.getFirst();

  //As long as fast or fast.next exist, keep running through
  //the list til the end, if its a singly linked list
  //it will reach the end and break out of the loop
  while (fast && fast.next) {
    //increment the slow by 1 and fast by 2
    slow = slow.next;
    fast = fast.next.next;

    //If at any point in the loop, slow === fast,
    //we have a cycle and it will return true, since fast lapped over
    //slow
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

module.exports = circular;
