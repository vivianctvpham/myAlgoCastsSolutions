// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

// function fib(n) {
//   //What if there was an edge case of -1 nums?
//   if (n < 0) throw new Error("Cannot be negative");

//   return n < 2 ? n : fib(n - 1) + fib(n - 2);
// }

module.exports = fib;
