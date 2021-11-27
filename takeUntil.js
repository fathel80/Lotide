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

let takeUntil = function(array, callback) {
  let arr = [];
  let count = 0;
  while (!callback(array[count])) {
    arr.push(array[count]);
    count ++;
    if (count === array.length) {
      break;
    }
  }
  return arr;
}

let data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
let results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

let data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
let results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);