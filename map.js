let eqArrays = function(actual, expected) {
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

let assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


let words = ["ground", "control", "to", "major", "tom"];
let map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


let results1 = map(words, word => word[0]);
let results2 = map(words, word => word[word.length-1]);
let results3 = map(words, word => word);
let results4 = map(words, word => word.length);


assertArraysEqual(results1, ["g","c","t","m","t"]);
assertArraysEqual(results2, ["d","l","o","r","m"]);
assertArraysEqual(results3, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results4, [6,7,2,5,3]);


