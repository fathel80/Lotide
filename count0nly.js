let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countOnly = function(allItems, itemsToCount) {
  let obj = {};
  for (let val of allItems) {
    if (itemsToCount[val]) {
      if (obj[val]) {
        obj[val] += 1;
      } else {
        obj[val] = 1;
      }
    }
  }
  return object;
};



let firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

let result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
