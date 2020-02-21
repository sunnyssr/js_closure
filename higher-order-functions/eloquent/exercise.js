// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
let flatten = (arrays) => {
  return arrays.reduce((acc, val) => {
    acc = acc.concat(val);
    return acc;
  }, []);
}
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
let loop = (value, test, update, body) => {
  for(let i = value; test(i); i = update(i)) {
    body(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  return array.reduce((acc, val, index, array) => {
    return (!test(val, index, array)) ? false : acc;
  }, true);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Couldn't figure this one out.
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
