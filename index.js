//Creating, Using the new Object() constructor:
const counter = new Object();
counter.count = 0;

counter.increment = function() {
  this.count++;
};

counter.decrement = function() {
  this.count--;
};

counter.reset = function() {
  this.count = 0;
};


//Creating, Using an Object Literal:
const counter = {
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  reset() {
    this.count = 0;
  },
};

//Copying, Using Object.assign() method:
const copiedCounter1 = Object.assign({}, counter);

//Copying, Using the Object.create() method: var1
const copiedCounter2 = Object.create(
  Object.getPrototypeOf(counter),
  Object.getOwnPropertyDescriptors(counter)
);
//Copying, Using the Object.create() method: var2
const copiedCounter2 = Object.create(counter);

//Copying, Using the spread operator:
const copiedCounter3 = { ...counter };

//Copying, Using JSON.parse() and JSON.stringify() methods:
const copiedCounter4 = JSON.parse(JSON.stringify(counter));

//Creating, Creating objects with the "new" keyword
//Using a Constructor Function:
function Counter() {
  this.count = 0;
  this.increment = function () {
    this.count++;
  };
  this.decrement = function () {
    this.count--;
  };
  this.reset = function () {
    this.count = 0;
  };
}

const counter = new Counter();

//Creating, Using Classes:
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

const counter = new Counter();

/*
Creating,
Creating objects using the built-in methods of Object:
*/

//Creating, Using the Object.create() method: 
const counter = Object.create(
    {},
    Object.getOwnPropertyDescriptors({
      count: 0,
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      reset() {
        this.count = 0;
      },
    })
  );
  
//Copying, Using the Object.create() method: var1
const counterPrototype = {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  };
  
  const counter = Object.create(counterPrototype);


//Creating, Using the Object.assign() method: var1
const counterPrototype = Object.assign(
  {},
  {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  }
);
//Copying, Using the Object.assign() method: var2
const counterPrototype = {
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  reset() {
    this.count = 0;
  },
};

const counter = Object.assign({}, counterPrototype);



//Function Declaration:
function makeCounter() {
    const counter = {
      count: 0,
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      reset() {
        this.count = 0;
      },
    };
  
    return counter;
  }

//Function Expression:
const makeCounter = function() {
    const counter = {
      count: 0,
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      reset() {
        this.count = 0;
      },
    };
  
    return counter;
  };

//Arrow Function:
const makeCounter = () => {
    const counter = {
      count: 0,
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      reset() {
        this.count = 0;
      },
    };
  
    return counter;
  };

  
//Class:
class Counter {
    constructor() {
        this.count = 0;
      }
    
      increment() {
        this.count++;
      }
    
      decrement() {
        this.count--;
      }
    
      reset() {
        this.count = 0;
      }
    }
    
    const makeCounter = () => {
      return new Counter();
    };
    


// deep comparison function for two objects:
const obj1 = { here: { is: "on", other: "3" }, object: "Z" };
const obj2 = { here: { is: "on", other: "2" }, object: "Z" };

const deepEqual = (obj1, obj2) => {
  // Check if both arguments are objects
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Iterate over the keys
    for (let key of keys1) {
      // Recursively compare the values of each key
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    // If all properties are equal, return true
    return true;
  } else {
    // If both arguments are not objects, perform strict equality check
    return obj1 === obj2;
  }
};

// Example usage
console.log(deepEqual(obj1, obj2)); // Output: false




//Reverse a string using array methods:
function reverseStr(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage
  const reversedStr = reverseStr('Hello, Vladimir!');
  console.log(reversedStr); // Output: !rimidalV ,olleH
  