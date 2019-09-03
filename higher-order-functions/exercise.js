// Challenge 1
function add(numToAdd) {
  return (number) => number + numToAdd;
}
let addTwo = add(2);

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addString(stringToAdd) {
  return (string) => string + stringToAdd;
}
let addS = addString("s");

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  for(let key = 0; key < array.length; key++) {
    array[key] = callback(array[key], key, array);
  }
  return array;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for(let key = 0; key < array.length; key++) {
    callback(array[key], key, array);
  }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  array.forEach((value, index, arr) => {
    arr[index] = callback(value, index, arr);
  })
  return array;
}

//Extension 2
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for(let key = 0; key < array.length; key++) {
    accumulator = callback(accumulator, array[key], key, array)
  }
  return accumulator;
}

//Extension 3
// Created Array's every method using reduce. I wasn't sure that we are allowed to use every
function every(array, callback) {
  return array.reduce((acc, val, index, array) => {
    return (!callback(val, index, array)) ? false : acc;
  }, true);
}
function intersection(...arrays) {
  return arrays[0].reduce((acc, val, index) => {
    if(every(arrays, (value) => value.indexOf(val) != -1)){
      acc.push(val);
    }
    return acc;
  }, []);
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {

  return arrays.reduce((acc, val, i) => {

    val.reduce((accum, value, i) => {
      if(acc.indexOf(value) == -1) {
        acc.push(value);
      }
      return accum;
    }, []);
    return acc;

  }, [])
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  return array1.reduce((acc, val, index) => {
    if(callback(val) == array2[index]){
      acc[val] = callback(val);
    }

    return acc;
  }, {})
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  arrVals.reduce((accumulator, val) => {

    accumulator[val] = arrCallbacks.reduce((acc, callback) => {
      acc.push(callback(val));
      return acc;
    }, [])
    return accumulator;

  }, {})
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
