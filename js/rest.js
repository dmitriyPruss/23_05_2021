'use strict'

// arguments

function sum() {
  console.log('arguments :>> ', arguments);
  let result = 0;
  for(let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  };
  return result;
};

// debugger;
console.log('sum(1, 2, 3, 5) :>> ', sum(1, 2, 3, 5));

function sumRest (first, ...args) {
  console.log('args :>> ', args);

  return args.reduce( (accum, item) => accum + item, first);
};
console.log('sumRest(1, 3, 7) :>> ', sumRest(1, 3, 7));