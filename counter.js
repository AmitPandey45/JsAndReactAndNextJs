function createCounter(initialValue = 0) {
  var currentCounter = initialValue;

  return {
    increment: () => {
      currentCounter++;
    },

    decrement: () => {
      currentCounter--;
    },

    getCurrentValue: () => {
      return currentCounter;
    },
  };
}

function createCounter1(initialValue = 0) {
  var currentCounter = initialValue;

  return {
    increment: function () {
      currentCounter++;
    },

    decrement: function () {
      currentCounter--;
    },

    getCurrentValue: function () {
      return currentCounter;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCurrentValue());

counter.increment();
counter.increment();

console.log(counter.getCurrentValue());

counter.decrement();
counter.decrement();
counter.decrement();

console.log(counter.getCurrentValue());

function Counter(initialValue = 0) {
  this.currentCounter = initialValue;

  this.increment = function () {
    this.currentCounter++;
  };

  this.decrement = function () {
    this.currentCounter--;
  };

  this.getCurrentValue = function () {
    return this.currentCounter;
  };
}

// Usage example
const counter1 = new Counter(5);

counter1.increment();
console.log(counter1.getCurrentValue()); // Output: 6

counter1.decrement();
console.log(counter1.getCurrentValue()); // Output: 5

//const counter2 = new createCounter(10);
