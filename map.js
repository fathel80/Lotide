const eqArrays = function(actual, expected) {
  let check = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      check = false;
    }
  }

  if (actual.length !== expected.length) {
    check = false;
  }
  return check;
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

/// map function below
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[word.length-1]);
// const results3 = map(words, word => word);
// const results4 = map(words, word => word.length);

// //test cases
// assertArraysEqual(results1, ["g","c","t","m","t"]);
// assertArraysEqual(results2, ["d","l","o","r","m"]);
// assertArraysEqual(results3, ["ground", "control", "to", "major", "tom"]);
// assertArraysEqual(results4, [6,7,2,5,3]);
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[word.length-1]);
const results3 = map(words, word => word);
const results4 = map(words, word => word.length);

// //test cases
assertArraysEqual(results1, ["g","c","t","m","t"]);
assertArraysEqual(results2, ["d","l","o","r","m"]);
assertArraysEqual(results3, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results4, [6,7,2,5,3]);


