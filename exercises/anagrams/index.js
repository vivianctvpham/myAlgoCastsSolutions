// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }

  let tracker = {};

  for (let i = 0; i < stringA.length; i++) {
    let letter = stringA[i];
    tracker[letter] = tracker[letter] ? tracker[letter] + 1 : 1;
  }
  for (let i = 0; i < stringB.length; i++) {
    let letter = stringB[i];
    if (!tracker[letter] || tracker[letter] < 0) {
      return false;
    } else {
      tracker[letter] -= 1;
    }
  }
  return true;
}

module.exports = anagrams;
