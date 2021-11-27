let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(sentence) {
  let object = {};
  for (let char of sentence) {
    if (char !== " ") {
      if (object[char]) {
        object[char] += 1;
      } else {
        object[char] = 1;
      }
    }
  }
  return object;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("LHL"));