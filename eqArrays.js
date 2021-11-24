const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length){
      return false
  }
  for(let i=0; i < array1.length; i++){
    if  (array1[i] !== array2[i]){
        return false
    } 
  }
  return true
}


const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected)
  if (isEqual) {
    console.log(✅ ✅ ✅   Assertion passed: ${actual} === ${expected});
  } else {
    console.log(🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected});
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => Passed
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => Failed

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => Passed 
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => Failed