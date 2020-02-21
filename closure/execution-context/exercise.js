// Create the execution context flow of the this function

// > Global Execution Context

// >> Function Execution Context Created (Anonymous)
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

// >> Function Execution Context Finish (Anonymous)
// Object is assigned to counter variable 

// >> Function Execution Context Created (value)
counter.value();
// returns the value of privateCounter variable which is 0
// >> Function Execution Context Finished (value)

// >> Function Execution Context Created (increment)
counter.increment();
// >> Function Calls the changeBy function with the parameter of 1

// >>> Function Execution Context Created (changeBy)
// >>> Function increment the value of privateCounter variable which is passed as a parameter
// >>> Now the value of privateCounter is 1
// >>> Function Execution Context Finished (changeBy)

// >>> Function Execution Context Finished (increment)

// >> Function Execution Context Created (increment)
counter.increment();
// >> Function Calls the changeBy function with the parameter of 1

// >>> Function Execution Context Created (changeBy)
// >>> Function increment the value of privateCounter variable which is passed as a parameter
// >>> Now the value of privateCounter is 2
// >>> Function Execution Context Finished (changeBy)

// >>> Function Execution Context Finished (increment)

// >> Function Execution Context Created (value)
counter.value();
// >> returns the value of privateCounter variable which is 2
// >> Function Execution Context Finished (value)



// >> Function Execution Context Created (decrement)
counter.decrement();
// >> Function Calls the changeBy function with the parameter of -1

// >>> Function Execution Context Created (changeBy)
// >>> Function increment the value of privateCounter variable which is passed as a parameter
// >>> Now the value of privateCounter is 1
// >>> Function Execution Context Finished (changeBy)

// >>> Function Execution Context Finished (decrement)

// >> Function Execution Context Created (value)
counter.value();
// >> returns the value of privateCounter variable which is 1
// >> Function Execution Context Finished (value)
